// 필요한 HTML 요소들을 미리 선택
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedItemsDiv = document.getElementById('selected-items');
    const totalPriceDiv = document.getElementById('total-price');

    // 계산 및 표시 업데이트를 위한 함수
    function calculateTotal() {
        let totalPrice = 0;
        let itemsHtml = '';

        // 모든 체크박스를 확인
        checkboxes.forEach(checkbox => {
            // 만약 체크박스가 선택되었다면
            if (checkbox.checked) {
                // 총액에 가격(value)을 더함. 문자열이므로 숫자로 변환
                totalPrice += parseInt(checkbox.value);
                
                // 선택된 메뉴 목록에 이름(name)을 추가
                itemsHtml += `<p>${checkbox.name}</p>`;
            }
        });

        // 선택된 메뉴가 하나도 없으면 "메뉴를 선택하세요" 메시지 표시
        if (itemsHtml === '') {
            itemsHtml = '<p style="text-align: center; opacity: 0.7;">메뉴를 선택하세요.</p>';
        }

        // 화면에 선택된 메뉴 목록을 업데이트
        selectedItemsDiv.innerHTML = itemsHtml;
        
        // 화면에 총액을 업데이트. toLocaleString()으로 세 자리마다 콤마 추가
        totalPriceDiv.innerText = `총 ${totalPrice.toLocaleString()} 원`;
    }

    // 모든 체크박스에 'change' 이벤트 리스너를 추가
    // 체크박스의 상태가 바뀔 때마다 calculateTotal 함수가 실행됨
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    // 페이지가 처음 로드될 때 한 번 실행하여 초기 상태를 표시
    calculateTotal();