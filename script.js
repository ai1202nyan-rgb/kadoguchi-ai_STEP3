//背景設定
let addCount = 0; // 追加回数のカウント
const colors = ["lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;

// 要素の取得
const input = document.getElementById('input');
const showBtn = document.getElementById('showbtn');
const colorBtn = document.getElementById('colorbtn');
const displayArea = document.getElementById('displayarea');
const tableBody = document.querySelector('#data-table tbody');

// --- 設問1&3&4&5&6 表示ボタンの動作) ---
showBtn.addEventListener('click', function(){
    const val = input.value;

    // 設問1-b: 空チェック
    if (val === "") {
        alert("入力値が空です。");
        return;
    }

    // 設問1-a: テキスト表示
    displayArea.textContent = val;

    // 設問3: ハイライトの切り替え (toggle)
    displayArea.classList.toggle('highlight');

    // 設問4-a: テーブルへの追加
    addRow(val);
});

// --- 設問2: 背景色の変更 ---
colorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // 0, 1, 2 を循環
});

// --- 設問4, 5, 6: テーブル操作の関数 ---
function addRow(text) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${text}</td>
        <td><button class="delete-btn">削除</button></td>
    `;

    // 設問5: 削除機能
    row.querySelector('.delete-btn').addEventListener('click', () => {
        row.remove();
        updateCount(-1);
    });

    tableBody.appendChild(row);
    updateCount(1);

    // 設問6: 3件制限（4件目が来たら一番上を消す）
    if (tableBody.rows.length > 3) {
        tableBody.deleteRow(0);
        addCount--; // カウントも調整
    }
}

// 設問4&5: カウントとボタン表示制御
function updateCount(num) {
    addCount += num;
    if (addCount >= 3) {
        showBtn.style.display = 'none';
    } else {
        showBtn.style.display = 'inline-block';
    }
}

// --- 設問7: ループ表示 ---
console.log("--- 設問7: ループ開始 ---");
for (let i = 1; i <= 5; i++) {
    console.log(`ループ回数: ${i}`);
}