import styles from './item-container.module.css';
import { useState, ReactNode } from 'react';

interface ItemContainerProps {
    title: string;
    children?: ReactNode;
    hasRefresh?: boolean;
    class?: string;
    isLink?: boolean;
}
function ItemContainer({ title, hasRefresh = true, children,isLink = true }: ItemContainerProps) {

    const [rotate, setRotate] = useState(false);
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemContainerHeader}>
                <div className={styles.itemContainerHeaderTitle}>
                    <span className={styles.titleTxt}>{title}</span>
                    
                    { isLink && (<i className='iconfont icon-youjiantou'></i>)}
                </div>
                {
                    hasRefresh && (
                        <i className={`iconfont icon-shuaxin ${!rotate ? '' : styles.rotateIcon}`} style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => {
                            setRotate(!rotate);
                            setTimeout(() => {
                                setRotate(false);
                            }, 2000);
                        }}></i>
                    )
                }

            </div>
            <div className={styles.itemContainerContent}>
                {children}
            </div>
        </div>
    );
}
export default ItemContainer;