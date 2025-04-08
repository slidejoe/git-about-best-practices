<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'Joe Glombek'
    },
    tagline: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="slidev-layout bio">
        <div class="bio__content">

            <div class="bio__bio">
                <h1>{{ name }}</h1>
                <p>{{ tagline }}</p>
            </div>
            <div class="bio__info">
                <slot />
            </div>
        </div>
        <img class="bio__image" :src="image" :alt="name" v-motion :initial="{ x: 400 }" :enter="{ x: 0, transition: {
      type: 'spring',
      stiffness: 2500,
      damping: 2500,
      mass: 0.1,
    }, }"
            :leave="{ x: 400 }" :duration="600" />
    </div>
</template>
<style>
.slidev-layout.bio {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5em;

    .bio__bio {
        h1 {
            font-size: 3rem;
        }
    }

    .bio__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 50%;
    }

    .bio__image {
        position: absolute;
        bottom: 0;
        right: 0;
        max-height: 100%;
        max-width: 45%;
    }

    .bio__info {
        ul:has(> li > .slidev-icon) {
            margin: 0;
            padding: 0;
            list-style: none;

            > li {
                margin: 0;
            }
        }
    }
}
</style>