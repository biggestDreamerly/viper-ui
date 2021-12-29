import { defineComponent } from 'vue';
// Composables


export default defineComponent({
    name,


    setup(props, { slots }) {

        const renderIcon = () => {
            return (
                <div>1</div>
            );
        };

        return () => (
            <div role="button" >
                {renderIcon()}
            </div>
        );
    },
});