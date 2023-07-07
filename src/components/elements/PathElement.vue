<template>
    <svg viewBox="0 0 150 150">
        <path class="pathelement" id="path" fill="none" stroke-width="2" stroke="#ffffff" stroke-linecap="round"
            stroke-linejoin="round" d="
            M150 30
        h-60
        c-20 0 -20 20 0 40
        c20 20 20 40 0 40
        h-70
        v6
        l-6 -6
        l6 -6 
        v6

            

            " />
        <use class="pathelement grass" id="grass-1" href="#grass" x="60" y="85"/>
        <use class="pathelement grass" id="grass-2" href="#grass" x="100" y="50" />





        <!-- C40 65  20 70  20 80
            
            M20 00
            l0 30
            c0 10 -20 15 0 30 
            c 20 15 0 20  0 30
            l0 10
            l7 0
            l-7 7
            l-7 -7
            l7 0
        
        -->

        <defs>
            <path class="pathelement" id="grass" stroke="#ffffff" stroke-width=".5" stroke-linecap="round"  d="
        M5 10
    Q5 5 7 2
    M4 10
    Q4 6 2 5
    M6 10 
    Q6 7 9 6
    " />
        </defs>
    </svg>
</template>