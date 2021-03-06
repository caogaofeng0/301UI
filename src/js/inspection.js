import '../css/inspection.scss';
import './conmons/navmenu';

var echarts = require("echarts");
require('echarts/chart/line');
require('echarts/chart/bar');
// require('echarts/tooltip');
// require('echarts/title');


const  trend = document.getElementsByClassName('inspenction-con')[0];
const  pop = document.getElementsByClassName("pop")[0];
const  popHide = document.getElementsByClassName("close-tag")[0];
trend.onclick = function (e) {
    if (e.target.className === 'popUp') {
    //    pop.setAttribute('class', 'pop  pop-show')
    pop.style.opacity = 1;
    pop.style.visibility = 'visible';

    }
};
popHide.onclick = function (e) {
//   pop.setAttribute('class', 'pop')
  pop.style.opacity = 0;
  pop.style.visibility = 'hidden';
};




var option = {
  title: {
      text: '折线图堆叠'
  },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
      type: 'value'
  },
  series: [
      {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'直接访问',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
};

var myChart = echarts.init(document.getElementById('mainIns'));
myChart.setOption(option);