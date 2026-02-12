"use client"
import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from 'react';


const Dialog = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState('');

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        reset: () => setFormData(''),
    }));

    if (!isOpen) return null;

    return (
        <div className="dialog">
            <h2>Dialog</h2>
            <input
                type="text"
                value={formData}
                placeholder="Type something..."
                onChange={(e) => setFormData(e.target.value)}
            />
            <br />
            <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
    );
});

export default function Parent() {
    const dialogRef = useRef();
    return (
        <div>
            <h1>useImperativeHandle Dialog Example</h1>
            <div className='flex  space-x-2 '>
                <button className='cursor-pointer bg-green-800 text-white rounded px-1' onClick={() => dialogRef.current.open()}>Open Dialog</button>
                <button className='cursor-pointer bg-red-800 text-white rounded px-1'onClick={() => dialogRef.current.reset()}>Reset Dialog</button>
                <button  className='cursor-pointer bg-yellow-800 text-white rounded px-1' onClick={() => dialogRef.current.close()}>Close Dialog</button>
            </div>
            <Dialog ref={dialogRef} />
        </div>
    );
}
