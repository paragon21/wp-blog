export type ReducerProps = {
    state: any,
    action: {
        type: string,
        payload?: string 
    }
}

const reducer<ReducerProps> = (state: {}, action) => {
    switch (action.type)
}