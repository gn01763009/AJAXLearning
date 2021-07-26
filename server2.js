// 引入 express
const express = require('express')

// 創建應用對象
const app = express()

//data
const cars = [
	{ id: '003', name: 'Benz', prices: 2000 },
	{ id: '004', name: 'BMW', prices: 1000 },
	{ id: '005', name: 'RR', prices: 5000 },
	{ id: '006', name: 'Bosche', prices: 1020 },
]

// 創建路由規則
// 被使用監聽
app.use((res, req, next) => {
	console.log('someone taking your stuff!! -server2')
	next()
})
// request 是請求的封裝
// response 是響應的封裝
app.get('/cars', (request, response) => {
	//設置響應header
	response.setHeader('Access-Control-Allow-Origin', '*')
	//設置響應
	response.send(cars)
})

// 監聽端口
app.listen(5001, () => {
	console.log('服務開啟，端口5001')
})
