(function(){
    console.log('[Tilda Devmode] Loader started');
    
    // Проверяем что мы на Tilda
    if (!window.location.hostname.includes('tilda') && !window.location.hostname.includes('tilda.cc')) {
        console.warn('[Tilda Devmode] This script works only on Tilda');
        return;
    }
    
    // URL нашего output скрипта на GitHub Pages
    const scriptUrl = 'https://Stalagmit1.github.io/tilda-devmodebot/output_04675e68a7e74680922651176cd035c1.js';
    
    console.log('[Tilda Devmode] Loading from:', scriptUrl);
    
    // Загружаем и выполняем скрипт
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = function() {
        console.log('[Tilda Devmode] Script loaded successfully');
    };
    script.onerror = function() {
        console.error('[Tilda Devmode] Failed to load script');
    };
    
    // Вставляем в документ
    (document.head || document.documentElement).appendChild(script);
    
})();