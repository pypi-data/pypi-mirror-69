import mock
import unittest

from xlfunctions import xl
from xlcalculator import ast_nodes, xltypes
from xlcalculator.tokenizer import f_token


class ASTNodeTest(unittest.TestCase):

    def create_node(self):
        return ast_nodes.ASTNode(
            f_token(tvalue='tv', ttype='tt', tsubtype='tst'))

    def test_init(self):
        node = self.create_node()
        self.assertIsNotNone(node.token)

    def test_getattr(self):
        node = self.create_node()
        self.assertEqual(node.tvalue, 'tv')
        self.assertEqual(node.ttype, 'tt')
        self.assertEqual(node.tsubtype, 'tst')

    def test_eq(self):
        node1 = self.create_node()
        node2 = self.create_node()
        self.assertEqual(node1, node1)
        # Even though the two nodes have the same token values, each token has
        # a UUID that is used for comparison.
        self.assertNotEqual(node1, node2)

    def test_eval(self):
        node = self.create_node()
        with self.assertRaises(NotImplementedError):
            node.eval(mock.Mock(), {}, 'A1')

    def test_repr(self):
        node = self.create_node()
        self.assertEqual(
            repr(node), "<ASTNode tvalue: 'tv', ttype: tt, tsubtype: tst>")

    def test_str(self):
        node = self.create_node()
        self.assertEqual(str(node), 'tv')


class OperandNodeTest(unittest.TestCase):

    def create_node(self, value='1', type='nuber'):
        return ast_nodes.OperandNode(
            f_token(tvalue=value, ttype='operand', tsubtype=type))

    def test_eval(self):
        node = self.create_node()
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), 1)

    def test_eval_bool(self):
        node = self.create_node('TRUE', 'logical')
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), True)

    def test_eval_text(self):
        node = self.create_node('data', 'text')
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), 'data')

    def test_str(self):
        node = self.create_node()
        self.assertEqual(str(node), '1')

    def test_str_bool(self):
        node = self.create_node('TRUE', 'logical')
        self.assertEqual(str(node), 'True')

    def test_str_text(self):
        node = self.create_node('data', 'text')
        self.assertEqual(str(node), '"data"')
        node = self.create_node('This is "data"', 'text')
        self.assertEqual(str(node), '"This is \\"data\\""')


class OperatorNodeTest(unittest.TestCase):

    def create_node(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='+', ttype='operator-infix', tsubtype='math'))
        node.left = ast_nodes.OperandNode(
            f_token(tvalue='1', ttype='operand', tsubtype='number'))
        node.right = ast_nodes.OperandNode(
            f_token(tvalue='2', ttype='operand', tsubtype='number'))
        return node

    def test_eval(self):
        node = self.create_node()
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), 3)

    def test_eval_prefix(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='-', ttype='operator-prefix', tsubtype='math'))
        node.right = ast_nodes.OperandNode(
            f_token(tvalue='1', ttype='operand', tsubtype='number'))
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), -1)

    def test_eval_postfix(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='%', ttype='operator-postfix', tsubtype='math'))
        node.left = ast_nodes.OperandNode(
            f_token(tvalue='1', ttype='operand', tsubtype='number'))
        self.assertEqual(node.eval(mock.Mock(), {}, 'A1'), 0.01)

    def test_eval_unknown_type(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='-', ttype='operator', tsubtype='math'))
        with self.assertRaises(ValueError):
            node.eval(mock.Mock(), {}, 'A1')

    def test_str(self):
        node = self.create_node()
        self.assertEqual(str(node), '(1) + (2)')

    def test_str_prefix(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='-', ttype='operator-prefix', tsubtype='math'))
        node.right = ast_nodes.OperandNode(
            f_token(tvalue='1', ttype='operand', tsubtype='number'))
        self.assertEqual(str(node), '- (1)')

    def test_str_postfix(self):
        node = ast_nodes.OperatorNode(
            f_token(tvalue='%', ttype='operator-postfix', tsubtype='math'))
        node.left = ast_nodes.OperandNode(
            f_token(tvalue='1', ttype='operand', tsubtype='number'))
        self.assertEqual(str(node), '(1) %')


class RangeNodeTest(unittest.TestCase):

    def setUp(self):
        self.model = mock.Mock(
            cells={
                'Sh1!'+addr: xltypes.XLCell('Sh1!'+addr, value=idx)
                for idx, addr in enumerate(('A1', 'A2', 'B1', 'B2'))
            },
            ranges={'Sh1!A1:B2': xltypes.XLRange('Sh1!A1:B2')},
            defined_names={},
        )
        self.model.defined_names['first'] = self.model.ranges['Sh1!A1:B2']

    def create_node(self, range):
        return ast_nodes.RangeNode(
            f_token(tvalue=range, ttype='operand', tsubtype='range'))

    def test_get_cells(self):
        self.assertEqual(
            self.create_node('A1').get_cells(), ['A1'])
        self.assertEqual(
            self.create_node('A1:A3').get_cells(), [['A1'], ['A2'], ['A3']])
        self.assertEqual(
            self.create_node('S!A1:A2').get_cells(), [['S!A1'], ['S!A2']])

    def test_eval(self):
        node = self.create_node('A1:B2')
        res = node.eval(self.model, {}, 'Sh1!C1')
        exp = xl.RangeData([[0, 2], [1, 3]])
        self.assertTrue((res == exp).all().all())

    def test_eval_cell(self):
        node = self.create_node('A1')
        self.assertEqual(node.eval(self.model, {}, 'Sh1!C1'), 0)

    def test_str(self):
        node = self.create_node('A1:B2')
        self.assertEqual(str(node), 'A1:B2')


class FunctionNodeTest(unittest.TestCase):

    def create_node(self):
        node = ast_nodes.FunctionNode(
            f_token(tvalue='MOD', ttype='function', tsubtype='start'))
        node.args = [
            ast_nodes.OperandNode(
                f_token(tvalue='3', ttype='operand', tsubtype='number')),
            ast_nodes.OperandNode(
                f_token(tvalue='2', ttype='operand', tsubtype='number')),
        ]
        return node

    def test_eval(self):
        node = self.create_node()
        self.assertEqual(node.eval(mock.Mock(), xl.FUNCTIONS, 'A1'), 1)

    def test_str(self):
        node = self.create_node()
        self.assertEqual(str(node), 'MOD(3, 2)')
