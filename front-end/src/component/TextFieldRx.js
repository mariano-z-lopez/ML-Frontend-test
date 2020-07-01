import React, {useEffect, useRef} from "react";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import TextField from "@material-ui/core/TextField";

export default ({onChange, dueTime = 500, className, ...rest}) => {
    const el = useRef(null);

    const subscribe = () => {
        fromEvent( el.current, 'input')
            .pipe(
                map(event => event.target.value),
                debounceTime(dueTime),
                distinctUntilChanged()
            )
            .subscribe({
                next: (value => onChange(value))
            });
    };

    useEffect(subscribe, []);

    return (
        <TextField className={className} {...rest} ref={el}/>
    );
};