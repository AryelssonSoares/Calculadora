function createCalculator() {
    const result = document.querySelector('.result');
    const events = ['touchstat', 'click', 'keypress'];

    events.forEach(userEvent => {
        document.addEventListener(userEvent, (e) => {
            const el = e.target;

            if (el.classList.contains('btnInsert')) insertValue(el);

            if (el.classList.contains('btnClean')) cleanAll();

            if (el.classList.contains('btnBack')) cleanBack();

            if (el.classList.contains('btnResult')) resultConta();
        });
    });

    events.forEach(userEvent => {
        document.addEventListener(userEvent, e => {
            if (e.key === 'Enter') resultConta();
        });
    })

    function insertValue(el) {
        result.innerHTML += el.innerHTML;

        const btnResult = document.querySelector('.btnResult');
        btnResult.focus();
    }

    function cleanAll() {
        result.innerHTML = '';
    }

    function cleanBack() {
        result.innerHTML = result.innerHTML.slice(0, -1);
    }

    function resultConta() {
        try {
            const conta = eval(result.innerHTML);

            if (!conta) {
                result.innerHTML = '';
                return;
            }

            result.innerHTML = conta;

        } catch (e) {
            result.innerHTML = '';
            return;
        }
    }
}
createCalculator();