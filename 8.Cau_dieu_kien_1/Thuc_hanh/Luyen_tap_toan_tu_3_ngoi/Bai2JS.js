let login = prompt("nhap",'');
let message = (login === 'Employee') ?
    'Hello':
    (login === 'Director') ?
        'Greentings' :
        (login === '') ?
            'No login' :
            '';
alert(message);