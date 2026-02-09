(function(){
    'use strict';
    
    console.log('[Tilda Devmode] Loader initialized');
    
    // URL основного скрипта
    const scriptUrl = 'https://cdn.jsdelivr.net/gh/Stalagmit1/tilda-devmodebot@main/output_67f6257b71714593.js';
    
    // Создаем и загружаем скрипт
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.crossOrigin = 'anonymous';
    
    script.onload = function() {
        console.log('[Tilda Devmode] Main script loaded from:', scriptUrl);
    };
    
    script.onerror = function(error) {
        console.error('[Tilda Devmode] Failed to load script:', error);
        
        // Fallback: пробуем raw.githubusercontent.com
        const fallbackUrl = 'https://raw.githubusercontent.com/Stalagmit1/tilda-devmodebot/main/output_67f6257b71714593.js';
        console.log('[Tilda Devmode] Trying fallback:', fallbackUrl);
        
        const fallbackScript = document.createElement('script');
        fallbackScript.src = fallbackUrl;
        fallbackScript.type = 'text/javascript';
        document.head.appendChild(fallbackScript);
    };
    
    // Вставляем в документ
    (document.head || document.documentElement).appendChild(script);
    
    // Добавляем сообщение в консоль о готовности
    console.log('[Tilda Devmode] Script element created and appended');
    
})();