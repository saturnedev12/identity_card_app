<template>
    <div style="margin-bottom: 10px;">
        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Choisir une image ou un pdf"
            prepend-icon="mdi-camera" :label="label" variant="outlined"></v-file-input>
    </div>
</template>
<script>

export default {
    name: 'InputFileComponent',
    props: {
        label: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        tab: null,
    }),
}
</script>
