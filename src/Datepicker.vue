<template>
    <div 
    class="inline-block">
        <div 
        ref="trigger"
        :class="[this.opts.triggerClass]"
        v-if="!inline"
        @click="show = true">
            <slot :date="api.dates" :methods="api.methods">
                <input 
                :name="name"
                type="text" 
                ref="input"
                class="form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                @focus="show = true"
                @keydown.tab="show = false"
                :value="selectedReadable"
                autocomplete="off">
            </slot>
        </div>
        
        <div 
        ref="picker"
        v-show="inline || show" 
        class="w-full max-w-xs rounded-lg shadow-datepicker select-none"
        :class="{
            'z-50': !inline,
            'is-inline': inline,
        }"
        role="datepicker">
            <div 
            v-if="opts.withPointer && !inline"
            data-popper-arrow 
            :class="{
                'text-white': !dark,
                'text-gray-900': dark,
            }"></div>

            <div 
            v-if="inline || show" 
            class="pt-2 pb-1 px-1 rounded-lg"
            :class="{
                'text-gray-900 bg-white': !dark,
                'text-white bg-gray-900': dark,
                'border border-gray-200': !dark && inline
            }">
                <div class="flex items-center font-bold mb-1">
                    <!--
                    --------------------------------------- 
                        Header
                    --------------------------------------- 
                    -->
                    <div 
                    class="flex-initial flex items-center justify-center w-8 h-8 rounded-full leading-none select-none"
                    :class="[
                        !canSubTime ? 'opacity-50' : '',
                        canSubTime ? 'cursor-pointer ' + _theme.navHover : '',
                    ]"
                    @click="subTime()">
                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="flex-1 text-center">
                        <span 
                        v-if="view == 'days'"
                        class="p-1 cursor-pointer rounded-md"
                        :class="[
                            _theme.navHover
                        ]"
                        @click="changeView('months')">{{ focus.format('MMMM') }}</span> 

                        <span 
                        v-if="view !== 'years'"
                        class="p-1 -mx-1 cursor-pointer rounded-md"
                        :class="[
                            _theme.navHover
                        ]"
                        @click="changeView('years')">{{ focus.format('YYYY') }}</span>

                        <span v-if="view == 'years'">
                            {{ this.focus.clone().subtract(4, 'years').format('YYYY') }} - {{ this.focus.clone().add(7, 'years').format('YYYY') }}
                        </span>
                    </div>
                    <div 
                    class="flex-initial flex items-center justify-center w-8 h-8 rounded-full leading-none select-none"
                    :class="[
                        !canAddTime ? 'opacity-50' : '',
                        canAddTime ? 'cursor-pointer ' + _theme.navHover : '',
                    ]"
                    @click="addTime()">
                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                </div>

                <!--
                --------------------------------------- 
                    Days View 
                --------------------------------------- 
                -->
                <div
                v-if="view == 'days'">
                    <div class="flex uppercase py-2">
                        <div 
                        v-for="weekDay in weekDays" 
                        class="text-center text-xs font-semibold" 
                        :class="[
                            _theme.weekDay
                        ]"
                        style="width: 14.28%">
                            {{ weekDay }}
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <div 
                        v-for="(day, index) in days" 
                        class="flex items-center py-1 group" 
                        style="width: 14.28%" 
                        :class="_([
                            isSelectable(day) ? 'cursor-pointer' : '',
                            !isSelectable(day) ? 'cursor-default' : '',
                            isOverflow(day) && isSelectable(day) && !inFullRange(day) ? 'opacity-50' : '',
                            !isSelectable(day) ? 'opacity-25 line-through' : '',
                            inRange(day) ? 'range' : '',
                            isWeekend(day) && !inFullRange(day) ? _theme.day.weekendBg : '',
                            
                            // Weekend corner rounding
                            index == 5? 'rounded-tl-md' : '',
                            index == 6? 'rounded-tr-md' : '',
                            index == days.length - 2? 'rounded-bl-md' : '',
                            index == days.length - 1? 'rounded-br-md' : '',
                        ])"
                        @click.capture.stop.prevent="selectDay(day)"
                        @mouseenter="marshallDayEnter(day)"
                        @mouseleave="marshallDayLeave(day)">
                            <div class="flex w-full items-center justify-center">
                                <div 
                                class="flex items-center justify-center h-10 text-sm leading-none" 
                                :class="[ 
                                    isSelected(day) ? _theme.day.selected : '',
                                    !isSelected(day) && isSelectable(day) && !isRangeEnd(day) ? _theme.day.hover : '',
                                    !isSelected(day) && isRangeEnd(day) ? _theme.rangeEndHover : '',
                                    isToday(day) && !inFullRange(day) && !isSelected(day) ? 'border border-gray-400' : '',
                                    
                                    !inRange(day) ? 'w-10 rounded-full' : '',
                                    inRange(day) ? [
                                        'w-full', 
                                        _theme.day.inRange,
                                        isStartOfWeek(day)? 'box-content -ml-1 pl-1' : '',
                                        isEndOfWeek(day)? 'box-content -mr-1 pr-1' : '',
                                    ] : '',
                                    isRangeStart(day) ? 'w-full rounded-l-full rounded-r-none border-0' : '',
                                    isRangeEnd(day) ? 'w-full rounded-r-full rounded-l-none border-0' : '',
                                ]">
                                    {{ day.format('D') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 
                --------------------------------------- 
                    Months View
                --------------------------------------- 
                -->
                <div
                v-if="view == 'months'">
                    <div class="flex flex-wrap">
                        <div 
                        class="w-1/4" 
                        v-for="month in months"
                        @click="selectMonth(month)">
                            <div 
                            :class="[ 
                                _theme.month.tile,
                                _theme.month.tileBg,
                                isSelected(month)? _theme.day.selected : '',
                                month.format('MYYYY') == today.format('MYYYY') && !isSelected(month)? _theme.month.current : '',
                                !isSelectable(month)? 'opacity-25 line-through' : '',
                            ]">
                                {{ month.format('MMM') }}
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 
                --------------------------------------- 
                    Years View
                --------------------------------------- 
                -->
                <div
                v-if="view == 'years'">
                    <div class="flex flex-wrap">
                        <div 
                        class="w-1/4" 
                        v-for="year in years"
                        @click="selectYear(year)">
                            <div 
                            :class="[ 
                                _theme.month.tile,
                                _theme.month.tileBg,
                                isSelected(year)? _theme.day.selected : '',
                                year.format('YYYY') == today.format('YYYY') && !isSelected(year)? _theme.month.current : '',
                                !isSelectable(year)? 'opacity-25 line-through' : '',
                            ]">
                                {{ year.format('YYYY') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import dayjs from 'dayjs'
    import isoWeek from 'dayjs/plugin/isoWeek'
    import updateLocale from 'dayjs/plugin/updateLocale'
    import isBetween from 'dayjs/plugin/isBetween'
    import advancedFormat from 'dayjs/plugin/advancedFormat'
    let dayjsPlugins = [
        isoWeek,
        updateLocale,
        isBetween,
        advancedFormat
    ].map(plugin => dayjs.extend(plugin))

    import merge from 'deepmerge'

    import { popperGenerator, defaultModifiers } from '@popperjs/core/lib/popper-lite'
    import flip from '@popperjs/core/lib/modifiers/flip'
    import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
    import offset from '@popperjs/core/lib/modifiers/offset';
    import arrow from '@popperjs/core/lib/modifiers/arrow'
    const createPopper = popperGenerator({
        defaultModifiers: [...defaultModifiers, flip, preventOverflow, offset, arrow],
    })

    export default {
        name: 'Datepicker',
        props: {
            // Default date to show in the picker
            default: {
                default: null,
            },

            // Default date format
            format: {
                default: 'DD/MM/YYYY'
            },

            // Input name
            name: {
                default: ''
            },


            // Picker type
            // -----------------------------
            // e.g. single, range, multiple (in development)
            type: {
                default: 'single'
            },

            // can pick: days, months, years
            picks: {
                default: 'days',
                validator: function (value) {
                    return ['days', 'months', 'years'].indexOf(value) !== -1
                }
            },

            // Event trigger
            trigger: {
                default: 'click',
                validator: function (value) {
                    return ['click', 'mouseover', 'mouseenter', 'hover'].indexOf(value) !== -1
                }
            },


            // Picker layout/theme
            // -----------------------------
            inline: {
                type: Boolean,
                default: false
            },
            dark: {
                type: Boolean,
                default: false
            },
            theme: {
                type: String,
                default: 'blue'
            },
            placement: {
                default: 'bottom-start'
            },


            // Limit date selection
            // -----------------------------
            // By past/future
            disablePast: {
                type: Boolean,
                default: false
            },
            disableFuture: {
                type: Boolean,
                default: false
            },

            // By array/function
            disable:{
                default: null
            },

            // By min/max date
            from: {
                default: null
            },
            to: {
                default: null
            },


            // Additional options
            // -----------------------------
            options: {
                type: Object,
                default: function(){
                    return {}
                }
            }
        },

        data() {
            return {
                // Main dates
                date: null,
                selected: null,
                today: dayjs().startOf('day'),
                focus: dayjs().startOf('day'),

                // View: days, months, years
                view: 'days',

                show: false,

                // Date limits
                canSelectPast: true,
                canSelectFuture: true,
                minDate: null,
                maxDate: null,

                // Deny rules
                denyDates: null,

                // Range
                rangeHover: null,

                // Templates
                hasTemplate: false,
                template: null,
                templateMatches: null,

                // Options
                opts: {
                    // Days of week format
                    dowFormat: 'ddd',

                    // Trigger class
                    triggerClass: 'inline-block',

                    // Week starts on
                    weekStartsOn: 1,

                    // TODO.
                    // Transitions:
                    // enterTransition: 'fadeInDown',
                    // leaveTransition: 'fadeOutDown',

                    // With pointer?
                    withPointer: false,

                    // Enable popper js flip modifier
                    alwaysInView: true,
                },

                /* 
                 * Non-reactive Reference:
                 * Any properties we define in the component that don't need to be reactive
                
                @type    object
                @stores  The popper.js instance
                @initBy  setupInteraction
                popper: null,

                @type    function
                @stores  The focus setTimeout function
                @initBy  focusTimeout
                focusTimeout: null,
                */
            }
        },

        computed: {
            selectedReadable(){
                if(this.selected == null) return ''

                if(this.type == 'range'){
                    let dates = []
                    
                    this.selected.map(date => {
                        dates.push(date.format(this.format))
                    })

                    return dates.join(' - ')
                }
                
                return this.selected.format(this.format)
            },

            weekStartsOn(){
                return this.opts.weekStartsOn
            },

            weekEndsOn(){
                return (this.opts.weekStartsOn + 6) > 7? this.opts.weekStartsOn - 1 : this.opts.weekStartsOn + 6
            },

            day(){
                return this.focus.format('D')
            },

            month(){
                return this.focus.format('M')
            },

            year(){
                return this.focus.format('YYYY')
            },

            weekDays(){
                let dow  = this.opts.weekStartsOn
                let days = []

                for(let i = 1; i <= 7; i++){
                    days.push(dayjs().isoWeekday(dow).format(this.opts.dowFormat))

                    if(dow < 7){
                        dow++
                    }else{
                        dow = 1
                    }
                }

                return days
            },

            days(){
                let days = []

                let monthStart    = this.focus.startOf('month')
                let monthStartDay = monthStart.isoWeekday()
                let startOffset   = monthStartDay < this.opts.weekStartsOn? monthStartDay + 7 : monthStartDay
                let subDays       = startOffset - this.opts.weekStartsOn

                let monthEnd    = this.focus.endOf('month')
                let monthEndDay = monthEnd.isoWeekday()
                let endOffset   = monthEndDay <= this.weekEndsOn? monthEndDay : monthEndDay - 7
                let addDays     = this.weekEndsOn - endOffset

                let start     = monthStart.subtract(subDays, 'day')
                let end       = monthEnd.add(addDays, 'day')
                let totalDays = Math.abs(start.diff(end, 'day')) + 1

                for(let i = 0; i < totalDays; i++){
                    days.push(start.add(i, 'days'))
                }

                return days
            },

            months(){
                let months = []
                let start = this.focus.startOf('year')

                for(let i = 0; i < 12; i++){
                    months.push(start.add(i, 'months'))
                }

                return months
            },

            years(){
                let years = []
                let start = this.focus.subtract(4, 'years')

                for(let i = 0; i < 12; i++){
                    years.push(start.add(i, 'years'))
                }

                return years
            },

            // Check if we can go back/forward in focus time
            canAddTime(){
                let offset = this.view == 'years'? 12 : 1,
                    unit = this.view == 'days'? 'months' : 'years',
                    date = this.focus.clone().startOf('month').add(offset, unit)

                if(this.maxDate !== null && date.isAfter(this.maxDate.clone().startOf('month'))){
                    return false
                }
                
                return this.canSelectFuture || !date.isAfter(this.today.clone().startOf('month'))
            },
            canSubTime(){
                let offset = this.view == 'years'? 12 : 1,
                    unit = this.view == 'days'? 'months' : 'years',
                    date = this.focus.clone().startOf('month').subtract(offset, unit)

                if(this.minDate !== null && date.isBefore(this.minDate.clone().startOf('month'))){
                    return false
                }
                
                return this.canSelectPast || !date.isBefore(this.today.clone().startOf('month'))
            },

            // Range
            isSelectingRange(){
                if(this.type !== 'range' || this.selected == null) return false

                return this.selected.length == 1
            },

            // Theme
            _theme() {
                let color = this.theme
                let base = {
                    navHover: 'hover:bg-gray-200',
                    weekDay: 'text-gray-400',
                    day: {
                        hover: `group-hover:bg-${color}-200`,
                        selected: `bg-${color}-500 text-white`,
                        weekendBg: 'bg-gray-100',
                        inRange: `text-${color}-500 bg-${color}-300`,
                    },
                    month: {
                        current: 'border-gray-300 border hover:border-transparent',
                        tile: 'm-1 py-5 cursor-pointer text-center text-sm leading-none border border-transparent rounded-sm hover:text-white',
                        tileBg: `bg-gray-100 hover:bg-${color}-500`,
                    },
                    rangeEndHover: `group-hover:text-${color}-500 group-hover:bg-${color}-300`
                }
                let dark = {
                    navHover: 'hover:bg-gray-700',
                    weekDay: 'text-gray-600',
                    day: {
                        hover: `group-hover:bg-${color}-900`,
                        selected: `bg-${color}-500 text-white`,
                        weekendBg: 'bg-gray-800 bg-opacity-50',
                        inRange: `text-${color}-300 bg-${color}-700`,
                    },
                    month: {
                        current: 'border-gray-500 border hover:border-transparent',
                        tileBg: `bg-gray-800 hover:bg-${color}-500`,
                    },
                    rangeEndHover: `group-hover:text-${color}-300 group-hover:bg-${color}-700`
                }

                return this.dark ? merge(base, dark) : base
            },

            detectClickOutside() {
                return (e) => {
                    if(!this.show){
                        return false
                    }

                    if(e.target === this.$el || this.$el.contains(e.target)){
                        // Maintain focus if we're using the default input
                        if(this.$refs.input) {
                            this.$nextTick(() => {
                                this.focusTimeout = setTimeout(() => {
                                    this.$refs.input.focus()
                                }, 100)
                            })
                        }

                        return false
                    }

                    this.show = false
                }
            },

            api() {
                return {
                    dates: { 
                        raw: this.date, 
                        readable: this.selectedReadable 
                    },
                    methods: {
                        show: this.showPicker,
                        hide: this.hidePicker,
                        setFocus: this.setFocus,
                        setDate: this.setDate,
                    }
                }
            }
        },

        watch: {
            selected(newValue) {
                this.date = newValue

                // If we have a template replace the text
                if(this.hasTemplate){
                    this.parseTemplate()
                }

                if(newValue == null) return

                // Hide on selection
                if(this.type == 'range'){
                    if(newValue.length > 1){
                        this.show = false
                    }
                }else{
                    if(this.inline) {
                        this.focusOn(newValue)
                    }

                    this.show = false
                }
            },

            selectedReadable(newValue) {
                this.$emit('input', newValue)
            },

            show(newValue) {
                if(newValue){
                    this.updatePosition()
                    this.setupListeners()
                }else{
                    clearTimeout(this.focusTimeout)
                    this.teardownListeners()
                }
            },

            type(newValue) {
                this.selected = null
            },

            picks(newValue) {
                this.setupPickerFocus()
            },
        },

        mounted() {
            // Assign any options passed in via props
            // ---------------------------------------------
            this.setupPickerOptions()


            // Initial setup for dayjs
            // ---------------------------------------------
            this.setupLocale()


            // Eaves droppin' like J.Edgar ya dig?!
            // ---------------------------------------------
            // this.setupListeners()


            // Setup Popper Instance
            // ---------------------------------------------
            this.setupPopper()


            // Set date select limits
            // ---------------------------------------------
            this.setupPickerDateLimits()


            // Set the initial date and view
            // e.g. days, months, years
            // ---------------------------------------------
            this.setupPickerFocus()


            // Setup the template parsing
            // (if we have a tenplate)
            // ---------------------------------------------
            this.setupPickerTemplate()
        },

        beforeDestroy() {
            this.teardownListeners()

            this.teardownPopper()
        },

        methods: {
            setupPickerOptions(){
                this.opts = Object.assign(this.opts, this.options)
            },

            setupLocale(){
                dayjs.updateLocale('en-vue-datepicker', {
                    weekStart: this.opts.weekStartsOn
                });
            },

            setupListeners(){
                if(!this.inline) {
                    window.addEventListener('mousedown', this.detectClickOutside, {
                        capture: true,
                        passive: true
                    })
                }
            },

            teardownListeners(){
                if(!this.inline) {
                    window.removeEventListener('mousedown', this.detectClickOutside)
                }
            },

            setupPopper(){
                if(this.inline) return false

                this.$nextTick(() => {
                    let distance = this.opts.withPointer? 12 : 4
                    let modifiers = [
                        {
                            name: 'preventOverflow',
                            options: {
                                padding: {
                                    top: 5,
                                    bottom: 5
                                },
                            },
                        },
                        {
                            name: 'flip',
                            enabled: this.opts.alwaysInView,
                            options: {
                                padding: 5
                            }
                        },
                        {
                            name: 'offset',
                            options: {
                                offset: [0, distance]
                            }
                        },
                        {
                            name: 'arrow',
                            options: {
                                enabled: this.opts.withPointer,
                                padding: 8
                            }
                        }
                    ]

                    this.popper = createPopper(this.$refs.trigger, this.$refs.picker, {
                        placement: this.placement,
                        modifiers: modifiers,
                    })
                })
            },

            teardownPopper(){
                if(this.popper !== undefined) {
                    this.popper.destroy()
                }
            },

            setupPickerDateLimits(){
                // Set min/max date limits
                if(this.from !== null){
                    let from = dayjs(this.from)
                    if(!from.isValid()) console.error("The Datepicker 'from' date is invalid")
                    this.minDate = from
                }
                if(this.to !== null){
                    let to = dayjs(this.to)
                    if(!to.isValid()) console.error("The Datepicker 'to' date is invalid")
                    this.maxDate = to
                }

                // Set past/future limits
                this.canSelectPast   = !this.disablePast
                this.canSelectFuture = !this.disableFuture

                // Set recurrence limits
                this.updateDenyDates()
            },

            setupPickerFocus(){
                let defaultDate = this.default

                if(defaultDate !== null){
                    defaultDate = Array.isArray(defaultDate)? defaultDate : [defaultDate]
                    defaultDate = defaultDate.map(date => {
                        // Check for allowed strings
                        if(typeof date == 'string' && ['now', 'today'].indexOf(date.toLowerCase()) !== -1){
                            return dayjs()
                        }

                        return dayjs(date)
                    })

                    defaultDate.forEach(date => {
                        // Check date can be selected
                        if(!this.isSelectable(date)){
                            return console.error('This date cannot be selected, it is outside the allowed range!')
                        }

                        // Select date
                        this.select(date, true)
                    })
                    
                    this.focusOn(defaultDate[0], this.picks)
                }else{
                    defaultDate = this.minDate !== null? this.minDate : this.today

                    this.focusOn(defaultDate, this.picks)
                }
            },

            setupPickerTemplate(){
                // Check for a slot template
                if(this.$slots.default !== undefined){
                    let content = this.$refs.trigger.innerHTML

                    // Search for template vars
                    this.hasTemplate = content.trim().indexOf('%date') !== -1

                    // Set template
                    if(this.hasTemplate){
                        this.template = content.trim()
                    }
                }
            },

            parseTemplate(){
                // Get the template matches if needed
                if(this.templateMatches == null){
                    let reg = /%date(.*?)%/g
                    let matches = this.template.match(reg)

                    this.templateMatches = matches
                }

                // Get the original template
                let template = this.template

                // Loop through the %date% matches and update the new template var
                this.templateMatches.map(match => {
                    let parts  = this.replaceAll(match, '%', '').split('|')
                    let format = parts.length > 1? parts[1] : this.format

                    template = this.replaceAll(template, match, this.selected.format(format))
                })

                // Update the slot
                this.$refs.trigger.innerHTML = template
            },

            updatePosition(){
                if(this.inline || this.popper == null) return false;

                this.$nextTick(function(){
                    this.popper.update();
                });
            },

            updateDenyDates(){
                if(this.disable == null) {
                    return
                }
                
                let dates = []
                
                if(Array.isArray(this.disable)) {
                    dates = this.disable.map(date => {
                        return dayjs(date, [
                            'DD-MM-YYYY',
                            'DD/MM/YYYY',
                            'YYYY-MM-DD',
                            'YYYY/MM/DD'
                        ])
                    })
                }

                if(typeof this.disable == 'function') {
                    let from = this.focus.subtract(1, 'months').startOf('month')
                    let to   = this.focus.clone().add(1, 'months').endOf('month')
                    let days = []

                    while(from.isBefore(to)) {
                        days.push(from)

                        from = from.add(1, 'days')
                    }

                    dates = days.filter(date => {
                        return this.disable(date)
                    })
                }

                this.denyDates = dates
            },

            select(date, selectOnly = false){
                if(!this.isSelectable(date)) return false

                if(this.type == 'range'){
                    this.selectRangeDate(date)

                    return false
                }

                // Update selected
                this.selected = date

                // Exit here if we only need to select a date and nothing else
                if(selectOnly) return false

                // Emit select event
                this.$nextTick(function(){
                    this.$emit('select', this.selected)
                })
            },

            deselect(date){
                if(this.selected == date){
                    this.selected = null

                    return false
                }

                if(this.selected !== null && Array.isArray(this.selected)){
                    this.selected = this.selected.filter(selected => {
                        return selected !== date
                    })

                    if(this.selected.length == 0) this.selected = null
                }
            },

            focusOn(date, view = null){
                // Check if we can alter the focus date with this date
                if(!this.isFocusable(date)) return false

                // Set the focus
                this.focus = date

                // Set the view if defined
                if(view !== null) this.view = view

                // Update deny dates array
                this.updateDenyDates()

                // Update the picker position
                // - in case on months with more/less weeks
                this.updatePosition();

                // Emit focus event
                this.$nextTick(function(){
                    this.$emit('focus', this.focus)
                })
            },

            inFocus(date){
                return this.focus !== null && date.format('DMYYYY') == this.focus.format('DMYYYY')
            },

            isPast(date){
                return date.isBefore(this.today)
            },

            isFuture(date){
                return date.isAfter(this.today.clone().endOf('day'))
            },

            isFocusable(date){
                // Check we can select past dates
                if(!this.canSelectPast && this.isPast(date)) return false

                // Check we can select future dates
                if(!this.canSelectFuture && this.isFuture(date)) return false

                // Check for a minDate
                if(this.minDate !== null && date.isBefore(this.minDate)) return false

                // Check for a maxDate
                if(this.maxDate !== null && date.isAfter(this.maxDate)) return false

                return true
            },

            isSelectable(date){
                // Check if we have recurrance dates set
                if(this.denyDates !== null && this.denyDates.length > 0){
                    for (let i = 0; i < this.denyDates.length; i++) {
                        if(dayjs(this.denyDates[i]).isSame(date, 'day')) return false
                    }
                }

                return this.isFocusable(date)
            },

            isSelected(date){
                let format = this.getIsSelectedFormat()

                if(this.type == 'range' && this.selected !== null){
                    return this.selected.filter(selected => {
                        return date.format(format) == selected.format(format)
                    }).length > 0
                }

                return this.selected !== null && date.format(format) == this.selected.format(format)
            },

            getIsSelectedFormat(){
                let format = 'DMYYYY'

                if(this.view == 'months') format = 'MYYYY'
                if(this.view == 'years') format = 'YYYY'

                return format
            },

            // Day specific
            // -----------------------------
            isToday(day){
                return day.format('DMYYYY') == this.today.format('DMYYYY')
            },
            isOverflow(day){
                return day.format('M') !== this.focus.format('M')
            },
            isWeekend(day){
                return ['Saturday', 'Sunday'].indexOf(day.format('dddd')) !== -1
            },
            isDay(date, day){
                return dayjs(date).format('dddd').toLowerCase() == day.toLowerCase()
            },
            isStartOfWeek(day){
                return day.isoWeekday() == this.weekStartsOn
            },
            isEndOfWeek(day){
                return day.isoWeekday() == this.weekEndsOn
            },

            // Date addition/subtraction
            // -----------------------------
            addDay(num = 1){
                this.focusOn(this.focus.clone().add(num, 'days'))
            },
            subDay(num = 1){
                this.focusOn(this.focus.clone().subtract(num, 'days'))
            },

            addMonth(num = 1){
                this.focusOn(this.focus.clone().add(num, 'months'))
            },
            subMonth(num = 1){
                this.focusOn(this.focus.clone().subtract(num, 'months'))
            },

            addYear(num = 1){
                this.focusOn(this.focus.clone().add(num, 'years'))
            },
            subYear(num = 1){
                this.focusOn(this.focus.clone().subtract(num, 'years'))
            },

            getTimeMethod(prefix){
                return prefix + (this.view == 'days'? 'Month' : 'Year')                
            },
            addTime(num = 1){
                let method = this.getTimeMethod('add')
                num = this.view == 'years'? 12 : 1

                this[method](num)
            },
            subTime(num = 1){
                let method = this.getTimeMethod('sub')
                num = this.view == 'years'? 12 : 1
                
                this[method](num)
            },

            // Range specific
            // -----------------------------
            inRange(day){
                if(this.type !== 'range' || this.selected == null) return false

                let rangeStart = this.selected[0]
                let rangeEnd   = this.isSelectingRange? this.rangeHover : this.selected[1]

                if(rangeEnd == null) return false

                return day.isBetween(rangeStart, rangeEnd, 'day', '()')
            },
            isRangeStart(day){
                if(this.type !== 'range' || this.selected == null || (this.rangeHover == null && this.selected[1] == null)) return false

                return day.format('DMYYYY') == this.selected[0].format('DMYYYY')
            },
            isRangeEnd(day){
                if(this.type !== 'range' || this.selected == null || (this.rangeHover == null && this.selected[1] == null)) return false

                let end = this.selected[1] == null? this.rangeHover : this.selected[1]
                return day.format('DMYYYY') == end.format('DMYYYY')
            },
            inFullRange(day){
                return this.inRange(day) || this.isRangeStart(day) || this.isRangeEnd(day)
            },
            marshallDayEnter(day){
                if(this.type == 'range' && this.isSelectingRange){
                    if(day.isAfter(this.selected[0])) this.rangeHover = day
                }
            },
            marshallDayLeave(day){
                if(this.type == 'range' && this.rangeHover !== null){
                    if(this.rangeHover == day) this.rangeHover = null
                }
            },
            selectRangeDate(date){
                // If we currently only have a start date
                if(this.selected !== null && this.selected.length == 1){
                    // Check if we need to deselect an already selected date
                    if(this.isSelected(date)){
                        this.deselect(date)
                    
                    // Check if we're selecting a date before the current selected date
                    // If yes, use as the start date instead
                    }else if(date.isBefore(this.selected[0])){
                        this.selected = [date]

                    // Push the date into the selected array
                    }else{
                        this.selected.push(date)
                    }

                    return false
                }

                // If we currently have a full range
                if(this.selected == null || this.selected.length == 2){
                    this.selected = [date]

                    // Reset the range hover for our new selection
                    this.rangeHover = null
                }
            },

            changeView(view){
                this.view = view
            },

            selectDay(day){
                this.select(day)
            },

            selectMonth(month){
                if(this.picks == 'months'){
                    return this.select(month.startOf('month'))
                }

                this.focusOn(month, 'days')
            },

            selectYear(year){
                if(this.picks == 'years'){
                    return this.select(year.startOf('year'))
                }

                this.focusOn(year, 'months')
            },

            replaceAll(str, search, replacement) {
                return str.split(search).join(replacement)
            },

            handleMouseLeave() {
                if(['mouseenter', 'mouseover', 'hover'].indexOf(this.trigger) == -1) {
                    return false
                }

                this.show = false
            },

            // Slot methods
            showPicker() {
                this.show = true
            },
            hidePicker() {
                this.show = false
            },
            setFocus(date) {
                this.focusOn(dayjs(date))
            },
            setDate(date, show) {
                this.select(dayjs(date))
                this.focusOn(dayjs(date))

                if(show){
                    this.showPicker()
                }
            },

            _(classes) {
                return classes
                
                classes = classes.filter(item => item)
                    .join(' ')
                    .split(' ')

                return classes.map(item => {
                    return 'vdp-' + item
                })
            }
        }
    }
</script>
