import React from 'react'

type PreProps = {
	children: React.ReactChild
	theme: string
	showLineNumbers: string
}

export const Pre = ({ children, theme, showLineNumbers }: PreProps) => {
	console.log('Pre -> start')
	console.log({ children, theme, showLineNumbers })
	console.log('Pre -> end')
	return (
		<pre
			className={`px-4 py-3 overflow-x-auto rounded-md ${
				theme ? `${theme}-theme` : 'bg-gray-900'
			} ${showLineNumbers ? 'line-numbers' : ''}`}
		>
			{children}
		</pre>
	)
}
