import G6 from '@antv/g6';
const data = {
 nodes: [{id:'0', label: '20000010\n清洁工具_3'},{id:'20000010', label: '20000020\n清洁工具_7'},{id:'20000020', label: '20000030\n清洁工具_4\n清洁用品_3'},{id:'20000030', label: '20000040\n清洁工具_3'},{id:'20000030', label: '20000050\n清洁工具_6\n清洁用品_3'},{id:'20000050', label: '20000060\n清洁工具_5'},{id:'20000060', label: '20000070\n清洁工具_2\n清洁用品_3'},{id:'20000060', label: '20000080\n清洁工具_4'},{id:'20000070', label: '20000090\n清洁工具_5\n清洁工具_2'},{id:'20000080', label: '20000090\n清洁工具_5\n清洁工具_2'},{id:'20000090', label: '20000100\n清洁用品_5'},{id:'20000090', label: '20000110\n清洁工具_3'},{id:'20000090', label: '20000120\n清洁工具_4\n清洁工具_2'},{id:'20000100', label: '20000130\n清洁工具_7\n清洁用品_4'},{id:'20000110', label: '20000130\n清洁工具_7\n清洁用品_4'},{id:'20000120', label: '20000130\n清洁工具_7\n清洁用品_4'},{id:'20000130', label: '20000140\n零食_2\n清洁工具_3'},{id:'20000140', label: '20000150\n饮料_6'},{id:'20000150', label: '20000160\n清洁工具_3\n清洁工具_2'},{id:'20000150', label: '20000170\n清洁工具_5\n清洁用品_3\n饮料_6'},{id:'20000150', label: '20000180\n清洁工具_4'},{id:'20000160', label: '20000190\n零食_2'},{id:'20000170', label: '20000190\n零食_2'},{id:'20000180', label: '20000190\n零食_2'},{id:'20000190', label: '20000200\n清洁工具_8'},{id:'20000190', label: '20000210\n饮料_4\n饮料_3'},{id:'20000210', label: '20000220\n饮料_3\n清洁工具_3'},{id:'20000220', label: '20000230\n清洁工具_3\n饮料_6'},{id:'20000220', label: '20000240\n清洁工具_2\n清洁用品_6\n零食_4'},{id:'20000220', label: '20000250\n清洁工具_6'},{id:'20000230', label: '20000260\n零食_2'},{id:'20000230', label: '20000290\n围裙_5'},{id:'20000240', label: '20000260\n零食_2'},{id:'20000250', label: '20000260\n零食_2'},{id:'20000260', label: '20000270\n清洁工具_3'},{id:'20000270', label: '20000280\n饮料_8'},{id:'20000270', label: '20000300\n围裙_4\n清洁工具_5'},{id:'20000300', label: '20000310\n饮料_4'},{id:'20000310', label: '20000320\n清洁工具_4\n零食_4'},{id:'20000320', label: '20000330\n清洁工具_6\n清洁用品_4\n饮料_4'},{id:'20000330', label: '20000340\n清洁工具_5'},{id:'20000330', label: '20000350\n饮料_6\n清洁工具_4'},{id:'20000330', label: '20000360\n围裙_5\n清洁工具_3'},{id:'20000340', label: '20000380\n零食_3'},{id:'20000350', label: '20000380\n零食_3'},{id:'20000360', label: '20000370\n清洁用品_4\n清洁用品_3\n清洁用品_2'},{id:'20000360', label: '20000380\n零食_3'},{id:'20000370', label: '20000380\n零食_3'},{id:'20000380', label: '20000390\n饮料_5'},{id:'20000390', label: '20000400\n清洁工具_7'},{id:'20000390', label: '20000410\n围裙_4'},{id:'20000410', label: '20000420\n清洁工具_5\n清洁用品_2'},{id:'20000420', label: '20000430\n饮料_7\n饮料_3\n清洁工具_4'},{id:'20000420', label: '20000440\n零食_2\n清洁用品_4'},{id:'20000430', label: '20000450\n清洁工具_6\n饮料_6'},{id:'20000440', label: '20000450\n清洁工具_6\n饮料_6'}],edges: [{source:'0', target: '20000010'},{source:'20000010', target: '20000020'},{source:'20000020', target: '20000030'},{source:'20000030', target: '20000040'},{source:'20000030', target: '20000050'},{source:'20000050', target: '20000060'},{source:'20000060', target: '20000070'},{source:'20000060', target: '20000080'},{source:'20000070', target: '20000090'},{source:'20000080', target: '20000090'},{source:'20000090', target: '20000100'},{source:'20000090', target: '20000110'},{source:'20000090', target: '20000120'},{source:'20000100', target: '20000130'},{source:'20000110', target: '20000130'},{source:'20000120', target: '20000130'},{source:'20000130', target: '20000140'},{source:'20000140', target: '20000150'},{source:'20000150', target: '20000160'},{source:'20000150', target: '20000170'},{source:'20000150', target: '20000180'},{source:'20000160', target: '20000190'},{source:'20000170', target: '20000190'},{source:'20000180', target: '20000190'},{source:'20000190', target: '20000200'},{source:'20000190', target: '20000210'},{source:'20000210', target: '20000220'},{source:'20000220', target: '20000230'},{source:'20000220', target: '20000240'},{source:'20000220', target: '20000250'},{source:'20000230', target: '20000260'},{source:'20000230', target: '20000290'},{source:'20000240', target: '20000260'},{source:'20000250', target: '20000260'},{source:'20000260', target: '20000270'},{source:'20000270', target: '20000280'},{source:'20000270', target: '20000300'},{source:'20000300', target: '20000310'},{source:'20000310', target: '20000320'},{source:'20000320', target: '20000330'},{source:'20000330', target: '20000340'},{source:'20000330', target: '20000350'},{source:'20000330', target: '20000360'},{source:'20000340', target: '20000380'},{source:'20000350', target: '20000380'},{source:'20000360', target: '20000370'},{source:'20000360', target: '20000380'},{source:'20000370', target: '20000380'},{source:'20000380', target: '20000390'},{source:'20000390', target: '20000400'},{source:'20000390', target: '20000410'},{source:'20000410', target: '20000420'},{source:'20000420', target: '20000430'},{source:'20000420', target: '20000440'},{source:'20000430', target: '20000450'},{source:'20000440', target: '20000450'}]

};
const width = document.getElementById('container').scrollWidth;
const height = document.getElementById('container').scrollHeight || 1500;
const graph = new G6.Graph({
  container: 'container',
  width,
  height,
  fitView: false,
  modes: {
    default: [ 'drag-canvas','zoom-canvas', 'drag-node' ]
  },
  layout: {
    type: 'dagre',
    rankdir: 'LR',
    align: 'DL',
    nodesepFunc: () => {
      return 1;
    },
    ranksepFunc: () => {
      return 1;
    }
  },
  animate: true,
  defaultNode: {
    size: [ 80, 80 ],
    shape: 'rect',
    style: {
      lineWidth: 2,
      stroke: '#5B8FF9',
      fill: '#C6E5FF'
    }
  },
  defaultEdge: {
    size: 1,
    color: '#39c5bb',
    style: {
      endArrow: {
        path: 'M 4,0 L -4,-4 L -4,4 Z',
        d: 4
      }
    }
  }
});
graph.data(data);
graph.render();
