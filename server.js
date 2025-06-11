const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://user7013:aa123456@cluster0.c5shtvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// 定義您的資料庫名稱，請替換為您實際的資料庫名稱
const DATABASE_NAME = "test";
// 定義集合名稱
const USERS_COLLECTION = 'users';
const BULLETIN_COLLECTION = 'bulletins';

async function startServer() {
    try {
        await client.connect();
        console.log("成功連接到 MongoDB!")

        //  Express 中介軟體設定 (只設定一次)
        app.use(cors()); //允許跨域請求
        app.use(express.json()); // 解析 JSON 格式的請求體
        //設定靜態文件目錄。這會自動處理 /static/style.css, /static/static/f9a4.gif 等請求
        app.use(express.static(path.join(__dirname, 'static')));

        // ... 你的 API 路由 ...

        // 獲取公告的 API
        app.get('/api/getBulletin', async (req, res) => {
            try {
                const collection = client.db(DATABASE_NAME).collection(BULLETIN_COLLECTION);
                const bulletinDoc = await collection.findOne({}); // 獲取第一條公告
                const message = bulletinDoc ? bulletinDoc.message : "目前沒有公告內容。";

                // *** 請添加這一行 ***
                console.log("從資料庫獲取的公告內容 (伺服器端):", message);

                res.json({
                    status: 'success',
                    message: message
                });
            } catch (error) {
                console.error("獲取公告失敗:", error);
                res.status(500).json({
                    status: 'error',
                    message: '無法獲取公告內容'
                });
            }
        });

        // 更新公告的 API
        app.post('/api/Bulletin', async (req, res) => {
            const {message} = req.body;
            if (!message) {
                return res.status(400).json({
                    status: 'error',
                    message: '公告內容不能為空'
                });
            }
            try {
                const collection = client.db(DATABASE_NAME).collection(BULLETIN_COLLECTION);
                // 更新或插入公告，如果沒有匹配的文檔則創建一個新的
                await collection.updateOne({}, {$set: {message: message}}, {upsert: true});
                res.json({
                    status: 'success',
                    message: '公告更新成功'
                });
            } catch (error) {
                console.error("更新公告失敗:", error);
                res.status(500).json({
                    status: 'error',
                    message: '無法更新公告內容'
                });
            }
        });

        //靜態文件服務路由
        //提供首頁(index.html)
        app.get("/",(req,res) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        });

        //提供register.html
        app.get("/register.html",(req,res) => {
            res.sendFile(path.join(__dirname, 'register.html'));
        })

        // 啟動伺服器 (只執行一次)

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`伺服器運行在 port ${PORT}`);
        });

    } catch (e) {
        console.error("無法連接到 MongoDB 或啟動伺服器:", e);
        process.exit(1); //應用程式啟動失敗，退出
    }
}

startServer();