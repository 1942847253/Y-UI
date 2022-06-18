export default {
    mounted(el) {
        let isBlur = false;
        let isClick = false;
        let onSelectorInput = el.querySelector('.selector-input');
        let onSelectorMenu = el.querySelector('.selector-menu');

        const onInput = onSelectorInput.querySelector('.input');
        const onPlaceholder = onSelectorInput.querySelector('label');
        const onIconfont = onSelectorInput.querySelector('span');

        const menuHide = () => {
            onSelectorMenu.style.display = 'none';
            onIconfont.className = 'iconfont icon-xiangxia';
            setTimeout(() => {
                onInput.value.length === 0 && (onPlaceholder.style.display = 'block');
            }, 200);
        }

        const menuShow = () => {
            onSelectorMenu.style.display = 'block';
            onPlaceholder.style.display = 'none';
            onIconfont.className = 'iconfont icon-sousuo';
        }

        const nextTick = (callback) => {
            setTimeout(() => {
                callback();
            }, 100);
        }

        onInput.addEventListener('focus', () => {
            menuShow();
        }, false);

        onInput.addEventListener('blur', () => {
            isBlur && menuHide();
            setTimeout(() => {

            }, 200);
        }, false);

        onSelectorMenu.addEventListener('mouseenter', () => {
            isBlur = false;
        });

        onSelectorMenu.addEventListener('mouseleave', () => {
            isBlur = true;
            !isClick && onInput.focus()
        });

        nextTick(() => {
            onSelectorMenu.querySelectorAll('.menu-item').forEach(menu => {
                menu.addEventListener('click', () => {
                    isBlur = true
                    isClick = true;
                })
            })
        })


    }
}