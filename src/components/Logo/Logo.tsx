import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'high'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Rollie Logo"
      width={'auto'}
      height={64}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
     className={clsx('max-w-[12rem] w-full h-[64px]', className)}
      src="/rgb-rollie_diap.svg"
    />
  )
}
