import React, {useState} from 'react'

const ForScore = () => {
    const [score, setScore] =  useState<number>(0)

    return (
        <span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <button>확인</button>
            <button>취소</button>
        </span>
    )
}

export default ForScore