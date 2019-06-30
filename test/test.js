
require('should');
 
var add = require('../lib/add');
var sort = require('../lib/sort');
 
describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532')
      .should.equal('63861') 
  })
  
  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    add('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
  })
})
describe('数组排序',function(){
    it('[{num:1},{num:0}]升序排列结果为[{num:0},{num:1}]',function(){
        let arr = [{num:1},{num:0}]
        sort(arr)
            .should.deepEqual([{num:0},{num:1}])
    });
})