import React from 'react'
import actions from '../../../lib/actions'

const post = () => {
    return <div>
        <form action={actions}>
            <input placeholder='userId' name='userId' />
            <input placeholder='title' name='title' />
            <input placeholder='slug' name='slug' />
            <input placeholder='desc' name='desc' />
            <button>create</button>
        </form>
    </div>

}

export default post
