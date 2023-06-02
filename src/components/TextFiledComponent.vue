<template>
    <div style="margin-bottom: 10px;">
        <v-text-field style="background-color: white; border-radius: 5px;" clearable :label="label" :prepend-icon="icon"
            density="compact" variant="outlined" single-line hide-details :type="type"> </v-text-field>
    </div>
</template>
<script>

export default {
    name: 'TextFiledComponent',
    props: {
        label: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    data: () => ({
        tab: null,
    }),
}
</script>
