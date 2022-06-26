<template>
    <button :class="`y-button ${getButtonType(props.type)}`">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        default: () => ''
    }
})
const getButtonType = (type) => {
    switch (type) {
        case 'primary':
            return 'button-primary'
        case 'success':
            return 'button-success'
        case 'danger':
            return 'button-danger'
        case 'warning':
            return 'button-warning'
        case 'info':
            return 'button-info'
        default:
            return ''
    }
}
</script>

<style scoped lang="scss">
button:active {
    top: 0.5px;
}

.y-button {
    margin-right: 8px;
    margin-bottom: 12px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px #00000004;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 13px;
    border-radius: 2px;
    color: #000000d9;
    border-color: #d9d9d9;
    background: #fff;
}

.y-button:hover {
    color: #1890ff;
    border-color: #1890ff;
}

.y-button:active {
    background-color: #188fff18;
}

.button-primary {
    border-color: #409eff;
    background-color: #409eff;
    color: #ffff;
}

.button-primary:hover {
    color: #fff;
    border-color: #1890ff;
}

.button-primary:active {
    border-color: #188fff00;
    background-color: #188fffae;
}

.button-success {}

.button-warning {}

.button-danger {
    background-color: #ff4d4f;
    color: #ffff;
    border-color: #ff4d4f;
}

.button-danger:hover {
    color: #fff;
    border-color: #ff4d4f;
}

.button-danger:active {
    border-color: #ff4d5000;
    background-color: #ff4d5092;
}

.button-info {}
</style>