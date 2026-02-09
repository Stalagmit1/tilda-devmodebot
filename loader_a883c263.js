// Tilda Devmode Loader
(function(){
    console.log('[Tilda Loader] Starting...');
    
    // Проверяем Tilda
    const isTilda = window.location.hostname.includes('tilda') || 
                    window.location.hostname.includes('tilda.cc');
    
    if (!isTilda) {
        console.warn('[Tilda Loader] Not a Tilda site');
        return;
    }
    
    // URL основного скрипта
    const mainScriptUrl = 'https://cdn.jsdelivr.net/gh/Stalagmit1/testi@main/output_a883c263.js';
    
    // Создаем и загружаем скрипт
    const script = document.createElement('script');
    script.src = mainScriptUrl;
    script.type = 'text/javascript';
    script.crossOrigin = 'anonymous';
    
    script.onload = function() {
        console.log('[Tilda Loader] Main script loaded successfully');
    };
    
    script.onerror = function(err) {
        console.error('[Tilda Loader] Failed to load:', err);
        
        // Fallback на raw.githubusercontent
        const fallbackUrl = 'https://raw.githubusercontent.com/Stalagmit1/testi/main/output_a883c263.js';
        console.log('[Tilda Loader] Trying fallback:', fallbackUrl);
        
        const fallbackScript = document.createElement('script');
        fallbackScript.src = fallbackUrl;
        document.head.appendChild(fallbackScript);
    };
    
    // Вставляем в документ
    (document.head || document.documentElement).appendChild(script);
    
    console.log('[Tilda Loader] Script element created');
})();