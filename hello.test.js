require('should');
var hello = require('./lib/hello');
/**
 * 1、通常，测试脚本与所要测试的源码脚本同名，后缀名为.test.js    
 * 2、测试脚本里边应该包括一个或多个describe块，然后一个describe块应该包含一个或多个it块
 * 3、describe块被称为“测试套件”，用于定义一组相关的测试。它是一个函数，第一个参数是测试套件的名称，第二个参数是实际执行的函数。
 * 4、it块被称为“测试用例”，表示一个单独的测试，是测试的最小单位，它也是一个函数，第一个参数是测试用例的名称，第二个参数是实际执行的函数。 
 *    用于编写测试代码，一般都是先调用被测试的函数，获取结果以后使用断言库判断执行结果是否正确
 */
describe('输出指定字符串',function(){
    it('输出字符串Hello Tmall',function(){
        // should.be be可以省略
        hello().should.equal('Hello Tmall')
    })
   
})