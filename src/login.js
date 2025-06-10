// 等待整個網頁文件都載入完畢後再執行
$(document).ready(function() {

    // 監聽 ID 為 loginForm 的表單提交事件
    $('#loginForm').on('submit', function(event) {
        // 1. 防止表單用傳統方式送出 (這會導致頁面重新整理)
        event.preventDefault();

        // 2. 簡單的客戶端驗證
        let account = $('#account').val().trim(); // 取得帳號並移除前後空白
        let password = $('#password').val().trim(); // 取得密碼

        if (account === '') {
            alert('請輸入身分證字號！');
            $('#account').focus(); // 將游標聚焦到帳號欄位
            return; // 中斷執行
        }

        if (password === '') {
            alert('請輸入密碼！');
            $('#password').focus(); // 將游標聚焦到密碼欄位
            return; // 中斷執行
        }

        // 3. 顯示"登入中"的狀態
        const submitBtn = $('#submitBtn');
        const btnText = submitBtn.find('.btn-text');
        const spinner = submitBtn.find('.spinner-border');

        submitBtn.prop('disabled', true); // 禁用按鈕，防止重複點擊
        btnText.text('登入中...');        // 改變按鈕文字
        spinner.removeClass('d-none');   // 顯示載入中圖示

        // 4. 模擬一個網路請求 (實際開發中，這裡會是 AJAX 請求)
        // 我們用 setTimeout 來模擬 1.5 秒的延遲
        setTimeout(function() {

            // --- 這裡是後端驗證的邏輯 ---
            // 在這個範例中，我們假設帳號是 "admin"，密碼是 "1234"
            if (account === 'admin' && password === '1234') {
                // 登入成功
                alert('登入成功！準備跳轉到主頁...');
                // 實際開發中，這裡會跳轉頁面
                // window.location.href = '/dashboard.html';
            } else {
                // 登入失敗
                alert('帳號或密碼錯誤！');
            }

            // 5. 無論成功或失敗，都要恢復按鈕的狀態
            submitBtn.prop('disabled', false); // 重新啟用按鈕
            btnText.text('登入');             // 將文字改回來
            spinner.addClass('d-none');      // 隱藏載入中圖示

        }, 1500); // 1500 毫秒 = 1.5 秒

    });
});