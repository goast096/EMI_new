const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 模擬資料庫中的公告內容
let bulletinMessage = "一心提供以病患為中心的優質醫療";

// 獲取公告的 API
app.get('/api/getBulletin', (req, res) => {
    res.json({
        status: 'success',
        message: bulletinMessage
    });
});

// 更新公告的 API
app.post('/api/updateBulletin', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({
            status: 'error',
            message: '公告內容不能為空'
        });
    }

    bulletinMessage = message;
    res.json({
        status: 'success',
        message: '公告更新成功'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`伺服器運行在 port ${PORT}`);
});