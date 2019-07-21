
export default {
    baseWidth: 750,
    baseFontSize: 75,
    setFontSize() {
        let screenWidth = screen.availWidth;
        let fontSize = screenWidth / this.baseWidth * this.baseFontSize;
        // let viewport = document.createElement('meta');
        // viewport.setAttribute('name','viewport');
        // viewport.setAttribute('content',
        //     `width=device-width, initial-scale=1.0, user-scaleable=no`
        // )

        document.documentElement.style.fontSize = fontSize + 'px';
    }
}