import './MenuComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MenuComponent({
    state,
    tabs,
    currentTab,
    setCurrentTab
} : {
    state: boolean,
    tabs: { name: string, icon: any, subItems: { name: string, icon: any }[] }[],
    currentTab: string,
    setCurrentTab: (tab: string) => void
}
) {

    
    if(!state) return null
    return (
        <ul className="menu menu-lg">
            {tabs.map((tab, index) => (
                <li key={index}>
                    {(tab.subItems.length > 0) ? (
                        <details>
                            <summary>
                                <FontAwesomeIcon icon={tab.icon} />
                                {tab.name}
                            </summary>
                            <ul>
                                { tab.subItems.map((subItem, index) => (
                                    <li key={index}>
                                        <button onClick={() => setCurrentTab(subItem.name)} className={subItem.name == currentTab ? 'menu-item active' : 'menu-item'}>
                                            <FontAwesomeIcon icon={subItem.icon} />
                                            {subItem.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ) : (
                        <button onClick={() => setCurrentTab(tab.name)} className={tab.name == currentTab ? 'menu-item active' : 'menu-item'}>
                            <FontAwesomeIcon icon={tab.icon} />
                            {tab.name}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    )
}
