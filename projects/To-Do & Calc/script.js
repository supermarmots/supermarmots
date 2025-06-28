document.addEventListener('DOMContentLoaded', () => {

    // --- 공통: 내비게이션 로직 ---
    const navLinks = document.querySelectorAll('.nav-link');
    const appPages = document.querySelectorAll('.app-page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // 모든 링크와 페이지에서 active 클래스 제거
            navLinks.forEach(l => l.classList.remove('active'));
            appPages.forEach(p => p.classList.remove('active'));

            // 클릭된 링크와 타겟 페이지에 active 클래스 추가
            link.classList.add('active');
            const targetPage = document.getElementById(link.dataset.target);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });

    // --- To-Do List 로직 ---
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
            todoInput.focus();
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        // 완료 처리
        li.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                li.classList.toggle('completed');
            }
        });

        // 삭제 처리
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }

    // --- 계산기 로직 ---
    const calcDisplay = document.getElementById('calc-display');
    const calcButtons = document.querySelector('.buttons');
    let currentInput = '';
    let shouldResetDisplay = false;

    calcButtons.addEventListener('click', (e) => {
        if (!e.target.matches('button')) return;

        const button = e.target;
        const value = button.dataset.value;

        if (value === 'C') {
            currentInput = '';
            calcDisplay.textContent = '0';
            return;
        }

        if (value === '=') {
            try {
                const result = evaluate(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
                calcDisplay.textContent = result;
                currentInput = result.toString();
                shouldResetDisplay = true;
            } catch (error) {
                calcDisplay.textContent = 'Error';
                currentInput = '';
            }
            return;
        }

        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }

        // 연산자 중복 입력 방지
        const lastChar = currentInput[currentInput.length - 1];
        const operators = ['+', '-', '*', '/'];
        if (operators.includes(value) && operators.includes(lastChar)) {
            currentInput = currentInput.slice(0, -1);
        }

        currentInput += value;
        calcDisplay.textContent = currentInput;
    });
});