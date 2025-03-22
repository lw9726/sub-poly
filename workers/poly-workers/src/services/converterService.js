import Sub2Clash from '../utils/Sub2Clash.js';


export default {
    // 获取所有分组
    async converter(env, link) {
        try {
            let protocol;
            if (link.startsWith('vmess://')) protocol = 'vmess';
            else if (link.startsWith('trojan://')) protocol = 'trojan';
            else if (link.startsWith('ss://')) protocol = 'ss';
            else if (link.startsWith('ssr://')) protocol = 'ssr';
            else if (link.startsWith('hysteria://')) protocol = 'hysteria';
            else if (link.startsWith('hysteria2://')) protocol = 'hysteria2';
            else throw new Error('不支持的协议');
    
            const config = Sub2Clash.convert(protocol, link);
            return config;
        } catch (error) {
            console.error('转换失败:', error);
            throw error;
        }
    }
}