<template>
    <div>
        <canvas width="400" height="300" ref="canvas" style="margin: 10px;"></canvas>

        <v-btn icon="mdi-trash-can" @click="clear" style="margin-right: 10px;"></v-btn>

        <v-btn icon="mdi-content-save-edit-outline" @click="save"></v-btn>
    </div>
</template>

<script>

import SignaturePad from 'signature_pad';

export default {
    name: "SignaturePade",
    mounted() {
        this.signaturePad = new SignaturePad(this.$refs.canvas);
    },
    methods: {
        clear() {
            this.signaturePad.clear();
        },
        save() {
            const dataURL = this.signaturePad.toDataURL();
            console.log(dataURL)
            // Faire quelque chose avec l'image de la signature (envoyer au serveur, enregistrer dans la base de données, etc.)
        }
    }
};
</script>

<style>
canvas {
    border: 1px solid black;
}
</style>
