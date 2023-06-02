<template>
    <div id="card">
        <div id="card-title">
            <h1>République HabboIslandaise</h1>
        </div>
        <div id="card-id">
            <div id="card-number">
                <p class="cardtitle">Carte nationale d'identité :</p>
                <p>000000000000</p>
            </div>
            <p class="cardtitle">Nationalité HabboIslandaise</p>
        </div>
        <div id="card-information">
            <div id="card-photo"></div>
            <div id="card-text">
                <div id="card-name">
                    <div class="card-box"></div>
                    <p class="cardtitle">Nom :</p>
                    <p>Ruben</p>
                    <div class="card-box"></div>
                    <p class="cardtitle">Prénom :</p>
                    <p>Sacha</p>
                </div>
                <div id="card-detail">
                    <div class="card-box">
                        <p class="cardtitle">Sexe :</p>
                        <p>M</p>
                    </div>
                    <div class="card-box">
                        <p class="cardtitle">Né(e) le :</p>
                        <p>10.02.1998</p>
                    </div>
                    <div class="card-box">
                        <p class="cardtitle">Ville :</p>
                        <p>HabboVille</p>
                    </div>
                </div>
                <div id="card-sign">
                    <p class="cardtitle">Signature du titulaire :</p>
                    <div id="cardsign"></div>
                </div>
            </div>
        </div>
        <div id="card-code">
            <p>
                {{ '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< <<<<<<<<<<<<<<<<<<<<<<<<' }} </p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'IdentityCardComponent',
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bitter|Arvo|ato&display=swap');

body {
    background-image: url(https://mangetoica.com/gallery_images/homepage/background-mosaiques//bg.png);
    display: flex;
}

h1,
h2,
p {
    margin: 0;
}

h1 {
    font-family: 'Arvo', serif;
    font-weight: lighter;
    font-size: 25px;
}

.cardtitle {
    font-family: 'Bitter', serif;
    font-weight: bold;
}

p {
    font-family: 'Lato', sans-serif;
    display: inline-block;
    margin: 5px 1px;
    font-size: 15px;
}

#card {
    border: solid 2px #000;
    border-radius: 10px;
    box-shadow: 1px 2px 10px #000;
    background-color: #E9EEF2;
    margin: auto;
}

#card-title {
    padding: 5px;
    color: #fff;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    background-color: #2C6C73;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

#card-id {
    padding: 5px;
    display: flex;
}

#card-number {
    display: inherit;
    margin-right: 50px;
}

#card-information {
    display: flex;
    padding: 5px;
}

#card-photo {
    background: url(https://www.habbo.fr/habbo-imaging/avatarimage?hb=image&user=null&headonly=0&direction=3&head_direction=3&action=&gesture=&size=l) no-repeat, #BFAE99;
    background-position: center;
    background-repeat: none;
    border: solid 2px #000;
    height: 150px;
    width: 150px;
}

#card-detail {
    display: flex;

}

.card-box {
    margin-right: 20px;
}

#cardsign {
    background: no-repeat url(https://fontmeme.com/permalink/200329/2719511201202ec68d51bbc66ea58d25.png);
    background-position: center;
    height: 38px;
    width: 350px;
}

#card-code {
    padding: 5px;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>