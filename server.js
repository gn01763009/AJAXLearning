// 引入 express
const express = require('express')

// 創建應用對象
const app = express()

//data
const persons = [
	{ id: '003', name: 'R', age: 22 },
	{ id: '004', name: 'A', age: 24 },
	{ id: '005', name: 'S', age: 25 },
	{ id: '006', name: 'W', age: 26 },
]

// 創建路由規則
// 被使用監聽
app.use((req, res, next) => {
	console.log('someone taking your stuff!!')
	console.log('請求來自於：', req.get('Host'))
	console.log('請求的地址：', req.url)
	next()
})
// request 是請求的封裝
// response 是響應的封裝
app.get('/students', (request, response) => {
	//設置響應header
	response.setHeader('Access-Control-Allow-Origin', '*')
	//設置響應
	response.send(persons)
})

// 監聽端口
app.listen(5000, () => {
	console.log('服務開啟，端口5000')
})
