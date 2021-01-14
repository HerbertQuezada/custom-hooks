import {useEffect, useRef, useState} from 'react'

export const useFecth = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    }); 

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        
            setstate({
                data: null,
                loading: true,
                error: null
            });

            setTimeout(()=>{
                if(isMounted.current){
                    fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                            setstate({
                                data,
                                loading:false,
                                error:null
                            })
                        });
                }else{
                    console.log('No se llamo');
                }
            },3000)
        }, [url]);

    return state;
}
