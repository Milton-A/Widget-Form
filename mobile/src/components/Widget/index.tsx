import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Options } from '../Options';
import { Form } from '../form';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const BottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
    BottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={BottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ?
            <Success onSendAnotherFeedback={handleRestartFeedback} />
            :
            <>{
              feedbackType ?
                <Form
                  feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
                />
                :
                <Options onFeedbackTypeChanged={setFeedbackType} />
            }
            </>
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);