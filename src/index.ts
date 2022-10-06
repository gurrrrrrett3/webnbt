import NBT from "./nbt/NBT";

const fileInput = document.getElementById('file') as HTMLInputElement;
    
fileInput.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
       
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const target = event.target as FileReader;
            const result = target.result;
            if (result) {
                const buf = Buffer.from(result as ArrayBuffer);
                const nbt = NBT.parse(buf);

                console.log(nbt);
            }
        };
        reader.readAsArrayBuffer(file);

    }
})
