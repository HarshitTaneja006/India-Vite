<script>
    import Flag from "../assets/images/Flag.webp"
</script>

<div class="grid md:grid-cols-4 gap-[2rem] w-full pointer-events-none">
    <img src={Flag} alt="Indian Flag" class="hidden md:block place-self-center rounded-2xl">
    <div class="col-span-2 text-center grid">
        <div class="title1 | text-5xl text-secondary-focus">"India - A DreamLand"</div>
        <div class="title2 | text-4xl text-primary-focus">"Atithi Devo Bhava"</div>
    </div>
    <img src={Flag} alt="Indian Flag" class="hidden md:block place-self-center rounded-2xl">
</div>
<style>
    @keyframes scroll1 {
        0% {
            transform: translateX(-20%);
            opacity: 0%;
        }

        50% {
            opacity: 0%
        }

        100% {
            transform: translateX(0%);
            opacity: 100%
        }
    }
    
    .title1{
        animation-name: scroll1;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
    }

    @keyframes scroll2 {
        0% {
            transform: translateX(20%);
            opacity: 0%;
        }

        50% {
            opacity: 0%
        }

        100% {
            transform: translateX(0%);
            opacity: 100%
        }
    }

    .title2 {
        animation-name: scroll2;
        animation-delay: 0s;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
    }
</style>

