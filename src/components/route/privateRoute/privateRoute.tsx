import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';

interface IOwnProps {
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any>;
    permission?: string;
}

export type IProps = IOwnProps & RouteProps;
class PrivateRoute extends React.Component<IProps> {
    public render() {
        const { component, layout, permission, ...rest } = this.props;
        return <Route {...rest} render={this.renderRoute} />;
    }

    private renderRoute = (props: any) => {
        const { component: RenderComponent, layout: Layout } = this.props;

        if (Layout)
            return (
                <Layout>
                    <RenderComponent {...props} />
                </Layout>
            );
        return <RenderComponent {...props} />;
    };
}

export default connect()(PrivateRoute);
