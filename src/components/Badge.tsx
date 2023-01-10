import React from 'react'
import classNames from 'classnames'

export enum Variant { 
    red = "red", 
    green = "green", 
    yellow = "yellow",
    blue = "blue", 
}

export const Badge = ({variant, text, }: { variant: Variant, text: string }) => {
    const styles = {
        red: "text-red-800 dark:bg-red-200 dark:text-red-900 bg-red-100",
        green: "text-green-800 dark:bg-green-200 dark:text-green-900 bg-green-100",
        yellow: "text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 bg-yellow-100",
        blue: "text-blue-800 dark:bg-blue-200 dark:text-blue-900 bg-blue-100"
    }

    return (
        <span 
            className={
                classNames(
                    "mr-2 rounded px-2.5 py-0.5 text-xs font-semibold", 
                    styles[variant]
                )}>
          {text}
        </span>
    )
}