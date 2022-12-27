/*
发布订阅 事件中心
1. 事件存储对象
2. 可操作方法
 a) 订阅（子模块订阅事件）
 b) 取消订阅（子模块取消订阅事件）
 c) 发布（子模块发布事件）

 当事件中心发布了一个事件之后，子模块就是触发订阅事件，并执行对应的回调函数。

*/

class EventHub {
  cache:{[key:string]:Array<(data:unknown)=>void>}={
    // 羊城晚报:[fn1,fn2,fn3]
  }
  // 订阅
  on(eventName:string,fn:(data:unknown)=>void){
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }

  // 发布
  emit(eventName:string,data:unknown){
    (this.cache[eventName] || []).forEach(fn=>fn(data))
  } 

  // 取消订阅

  off(eventName:string,fn:(data:unknown)=>void){
    const index = this.cache[eventName].findIndex(fn)
    if(index === -1) return
    this.cache[eventName].splice(index,1)
  }
}


export default EventHub


const eventHub = new EventHub()

eventHub.on('羊城晚报', (data) => {
  console.log('订阅养成晚班',data)
})

eventHub.emit('羊城晚报','今日大事件：加班')