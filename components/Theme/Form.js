import React from 'react';
import Icon from './Icon';
import { Field as FormikField } from 'formik';
import classNames from '../../utils/classNames';

const Field = ({ name, label, type, textarea, placeholder, className, borderless, children }) => {
    const classes = React.useMemo(
        () =>
            classNames(
                borderless ? '' : 'border',
                'min-h-8 border-line rounded transition ease-in-out duration-200 focus:border-primary focus:outline-none w-full px-2',
                className
            ),
        [type, borderless, className]
    );

    return (
        <FormikField name={name}>
            {({ FormikFeield, meta: { error } }) => (
                <div>
                    <div className="flex items-center space-s-2">
                        {label ? <label className="mb-2">{label}</label> : null}
                        {error && (
                            <div className="flex justify-end items-center text-danger text-sm mb-2 flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
                                <Icon name="exclamation me-1" />
                                {error}
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        {textarea ? (
                            <textarea
                                className={classes}
                                placeholder={placeholder}
                                {...FormikFeield}
                            />
                        ) : (
                            <input
                                type={type}
                                className={classes}
                                placeholder={placeholder}
                                {...FormikFeield}
                            />
                        )}
                        {children}
                    </div>
                </div>
            )}
        </FormikField>
    );
};

export { Field };
