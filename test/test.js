
require('should');
var abs = require('../lib/abs');
var sort = require('../lib/sort');
var hello = require('../lib/hello');
var async = require('../lib/async');
var promise = require('../lib/promise');

describe('abs返回绝对值的方法', function () {
  it('数值-2.3的绝对值等于2.3', function () {
    abs(-2.3)
      .should.equal(2.3) 
  })
  it('数值238的绝对值等于228', function () {
    abs(238)
      .should.equal(238) 
  })
  it('数值0的绝对值等于0', function () {
    abs(0)
      .should.equal(0) 
  })
})
describe('数组排序',function(){
    it('[{num:1},{num:0}]升序排列结果为[{num:0},{num:1}]',function(){
        let arr = [{num:1},{num:0}]
        sort(arr,'num')
            // 对象的比较必须要用deepEqual
            .should.deepEqual([{num:0},{num:1}])
    });
})  

/**
 * mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于异步操作的测试用例，这个时间往往是不够的。
 * 通过给it()添加回调函数done，可以告知mocha需要等待异步测试结果。
 */
describe('测试异步',() => {
    it('测试异步方法',done => {
        async('guoguo',rst => {
            rst.should.equal('Hello guoguo');
            done();
        });
    })
})


setTimeout(() => {
    describe('测试promise',() => {
        it('测试promise',() => {
            // 使用should测试Promise对象时，一定要return
            // 使用fulfilled()、rejected()、fulfilledWith()、rejectedWith()等等一系列API测试Promise对象
            promise('guoyu').should.fulfilledWith('Hello guoyu');
        })
    });
    run();
})











// setTimeout(() => {
//     describe('测试promise',() => {
//         it('测试promise',() => {
//             // 使用should测试Promise对象时，一定要return
//             // 使用fulfilled()、rejected()、fulfilledWith()、rejectedWith()等等一系列API测试Promise对象
//             return promise('guoyu').should.fulfilledWith('Hello guoyu');
//         })
//     });
//     run();
// },1000)
