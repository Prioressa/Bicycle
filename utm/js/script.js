//не работает
//let setNum = window.localStorage.setItem('num', '2');
//let getNum = window.localStorage.getItem('num');
//let url = document.getElementById('url').value;
//url = getNum;
//
//работатет
//let url = document.getElementById('url');
//url.value = getNum;
document.getElementById('url').value = window.localStorage.getItem('url');
document.getElementById('source').value = window.localStorage.getItem('source');
document.getElementById('medium').value = window.localStorage.getItem('medium');
document.getElementById('campaign').value = window.localStorage.getItem('campaign');
document.getElementById('content').value = window.localStorage.getItem('content');
document.getElementById('term').value = window.localStorage.getItem('term');
document.getElementById('result').value = window.localStorage.getItem('result');

function compile() {
    let url = document.getElementById('url').value,
        source = document.getElementById('source').value,
        medium = document.getElementById('medium').value,
        campaign = document.getElementById('campaign').value,
        content = document.getElementById('content').value,
        term = document.getElementById('term').value,
        result = document.getElementById('result');

    if (url != '') {
        window.localStorage.setItem('url', url);
    } 
    
    if (source != '') {
        window.localStorage.setItem('source', source);
        source = "utm_source=" + source;
    }

    if (medium != '') {
        window.localStorage.setItem('medium', medium);
        medium = "&utm_medium=" + medium;
    } 
    if (campaign != '') {
        window.localStorage.setItem('campaign', campaign);
        campaign = "&utm_campaign=" + campaign;
    }

    if (content != '') {
        window.localStorage.setItem('content', content);
        content = "&utm_content=" + content;
    }

    if (term != '') {
        window.localStorage.setItem('term', term);
        term = "&utm_term=" + term;
    }
    
    result.value = url + "?" + source + medium + campaign + content + term;
    result.value.replace(/\s/g, '');
    window.localStorage.setItem('result', result.value);
}

function checkup() {
    let url = document.getElementById('url').value,
        source = document.getElementById('source').value,
        medium = document.getElementById('medium').value,
        campaign = document.getElementById('campaign').value,
        
        sourceError = document.getElementById('sourse-error'),
        mediumError = document.getElementById('medium-error'),
        campaignError = document.getElementById('campaign-error');
    
    if (source == '') {
        sourceError.classList.add('active');
        sourceError.classList.remove('disable');
        console.log('Ошибка: Заполните "utm_source"!');
    } else {
        sourceError.classList.remove('active');
        sourceError.classList.add('disable');
    }
    
    if (medium == '') {
        mediumError.classList.add('active');
        mediumError.classList.remove('disable');
        console.log('Ошибка: Заполните "utm_medium"!');
    } else {
        mediumError.classList.remove('active');
        mediumError.classList.add('disable');
    }
    
    if (campaign == '') {
        campaignError.classList.add('active');
        campaignError.classList.remove('disable');
        console.log('Ошибка: Заполните "utm_campaign"!');
    } else {
        campaignError.classList.remove('active');
        campaignError.classList.add('disable');
    }
    if (source != '' & medium != '' & campaign != '') {
        compile();
    }
}

function listenerChange(id) {
    
    let utmPlace = document.getElementById(id);
    
    utmPlace.addEventListener('change', (e) => {
        checkup();
    }); 
}
listenerChange('url');
listenerChange('source');
listenerChange('medium');
listenerChange('campaign');
listenerChange('content');
listenerChange('term');



const utmCT = {
    source: '',
    medium: '',
    campaign: '',
    content: '',
    term: ''
}
const utmGApoisk = {
    source: 'google',
    medium: 'cpc',
    campaign: '{campaignid}',
    content: '{creative}',
    term: '{keyword}'
}
const utmGAkms = {
    source: 'google',
    medium: 'cpc',
    campaign: '{campaignid}',
    content: '{creative}',
    term: '{placement}'
}
const utmYDpoisk = {
    source: 'yandex',
    medium: 'cpc',
    campaign: '{campaign_id}',
    content: '{ad_id}',
    term: '{keyword}'
}
const utmYDrsya = {
    source: 'yandex',
    medium: 'cpc',
    campaign: '{campaign_id}',
    content: '{ad_id}',
    term: '{source}'
}
const utmVKcpc = {
    source: 'vkontakte',
    medium: 'cpc',
    campaign: '{campaign_id}',
    content: '{ad_id}',
    term: ''
}
const utmVKcpm = {
    source: 'vkontakte',
    medium: 'cpm',
    campaign: '{campaign_id}',
    content: '{ad_id}',
    term: ''
}
const utmFB = {
    source: 'facebook',
    medium: 'cpc',
    campaign: '{{campaign.name}}',
    content: '{{ad.name}}',
    term: ''
}
const utmMTcpc = {
    source: 'vkontakte',
    medium: 'cpc',
    campaign: '{{campaign_id}}',
    content: '{{ad_id}}',
    term: '{{geo}}.{{gender}}.{{age}}'
}
const utmMTcpm = {
    source: 'vkontakte',
    medium: 'cpm',
    campaign: '{{campaign_id}}',
    content: '{{ad_id}}',
    term: '{{geo}}.{{gender}}.{{age}}'
}

function toPattern(element, utm) {
    let classElement = document.getElementById(element),
        source = document.getElementById('source'),
        medium = document.getElementById('medium'),
        campaign = document.getElementById('campaign'),
        content = document.getElementById('content'),
        term = document.getElementById('term');
    
    classElement.addEventListener('click', (e) => {
        e.preventDefault();
        source.value = utm.source;
        medium.value = utm.medium;
        campaign.value = utm.campaign;
        content.value = utm.content;
        term.value = utm.term;
        compile();
    });
}

toPattern('nav__tab-ga-poisk', utmGApoisk);
toPattern('nav__tab-ga-kms', utmGAkms);
toPattern('nav__tab-yd-poisk', utmYDpoisk);
toPattern('nav__tab-yd-rsya', utmYDrsya);
toPattern('nav__tab-vk-cpc', utmVKcpc);
toPattern('nav__tab-vk-cpm', utmVKcpm);
toPattern('nav__tab-fb', utmFB);
toPattern('nav__tab-mt-cpc', utmMTcpc);
toPattern('nav__tab-mt-cpm', utmMTcpm);


function clearUtm(element, utm) {
    let classElement = document.getElementById(element);
    
    let url = document.getElementById('url'),
        source = document.getElementById('source'),
        medium = document.getElementById('medium'),
        campaign = document.getElementById('campaign'),
        content = document.getElementById('content'),
        term = document.getElementById('term'),
        result = document.getElementById('result');
    
    classElement.addEventListener('click', (e) => {
        e.preventDefault();
        url.value = '';
        source.value = '';
        medium.value = '';
        campaign.value = '';
        content.value = '';
        term.value = '';
        result.value = '';
        window.localStorage.removeItem('url');
        window.localStorage.removeItem('source');
        window.localStorage.removeItem('medium');
        window.localStorage.removeItem('campaign');
        window.localStorage.removeItem('content');
        window.localStorage.removeItem('term');
        window.localStorage.removeItem('result');
    });
}

clearUtm('nav__tab-ct', utmCT);

var clipboard = new ClipboardJS('#btn_url_copy');

clipboard.on('success', function(e) {
    let btn = document.querySelector('#btn_url_copy');
    btn.textContent = 'Скопировано!';
    btn.classList.add('btn_success');
    btn.classList.remove('btn_neitral');
    
    setTimeout(clear, 1000);
    function clear() {
        btn.textContent = 'Скопировать UTM';
        btn.classList.remove('btn_success');
        btn.classList.add('btn_neitral');
    }
    
    e.clearSelection();
});

clipboard.on('error', function(e) {
    let btn = document.querySelector('#btn_url_copy');
    btn.textContent = 'Ошибка!';
    btn.classList.add('btn_error');
    btn.classList.remove('btn_neitral');
    
    setTimeout(clear, 1000);
    function clear() {
        btn.textContent = 'Скопировать UTM';
        btn.classList.remove('btn_error');
        btn.classList.add('btn_neitral');
    }
});

function copyUrl() {
    let url = document.getElementById('url');
    let result = document.getElementById('result');
    let btn = document.getElementById('btn_url_paste');
    
    btn.addEventListener('click', (e) => {
        chrome.tabs.getSelected(null, function(tab) {
        url.value = tab.url;
        compile();
        });
    });
}
copyUrl();