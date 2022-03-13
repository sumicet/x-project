import { ClassAttributes, HTMLAttributes } from 'react';

export type HTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;
