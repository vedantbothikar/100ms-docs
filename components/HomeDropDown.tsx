/* eslint-disable react/react-in-jsx-scope */
import {
    AndroidIcon,
    AppleIcon,
    FlutterIcon,
    JavascriptIcon,
    ReactIcon,
    ServerIcon
} from '@100mslive/react-icons';
import { Box, Flex, Text } from '@100mslive/react-ui';
import React from 'react';
import DropDownOption from './DropDownOption';

interface Props {
    setDropDownSelection: Function;
}

const HomeDropDown: React.FC<Props> = ({ setDropDownSelection }) => {
    const mobileSDK = [
        {
            icon: <AndroidIcon />,
            title: 'Android',
            id: 'android'
        },
        {
            icon: <AppleIcon />,
            title: 'iOS',
            id: 'ios'
        },
        {
            icon: <FlutterIcon />,
            title: 'Flutter',
            id: 'flutter'
        },
        {
            icon: <ReactIcon />,
            title: 'React Native',
            id: 'react-native'
        }
    ];
    return (
        <Flex
            className="dropdown-wrapper"
            onClick={(e) => e.preventDefault()}
            css={{
                position: 'absolute',
                zIndex: '10',
                top: '$17',
                backgroundColor: '$surfaceDefault',
                padding: '$10',
                borderRadius: '$2',
                gap: '$8',
                '@sm': {
                    right: '$0'
                }
            }}>
            <Box>
                <Text variant="overline">WEB</Text>
                <DropDownOption
                    title="JavaScript"
                    icon={<JavascriptIcon />}
                    setDropDownSelection={setDropDownSelection}
                />

                <DropDownOption
                    title="React"
                    icon={<ReactIcon />}
                    setDropDownSelection={setDropDownSelection}
                />
            </Box>

            <Box>
                <Text variant="overline">MOBILE</Text>
                {mobileSDK.map((tech) => (
                    <DropDownOption
                        key={tech.id}
                        title={tech.title}
                        icon={tech.icon}
                        setDropDownSelection={setDropDownSelection}
                    />
                ))}
            </Box>

            <Box>
                <Text variant="overline">SERVER</Text>
                <DropDownOption
                    title="Serverside"
                    icon={
                        <ServerIcon
                            style={{
                                height: '18px'
                            }}
                        />
                    }
                    setDropDownSelection={setDropDownSelection}
                />
            </Box>
        </Flex>
    );
};

export default HomeDropDown;
