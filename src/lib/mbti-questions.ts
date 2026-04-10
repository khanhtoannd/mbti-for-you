export interface MBTIQuestion {
  id: number;
  vi: string;
  en: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  direction: 1 | -1; // 1 = agree favors first letter, -1 = agree favors second
}

export const questions: MBTIQuestion[] = [
  // E vs I (10 questions)
  { id: 1, vi: 'Bạn cảm thấy tràn đầy năng lượng khi ở cùng nhiều người.', en: 'You feel energized when you are around a lot of people.', dimension: 'EI', direction: 1 },
  { id: 2, vi: 'Bạn thích suy nghĩ một mình hơn là thảo luận nhóm.', en: 'You prefer thinking alone rather than group discussions.', dimension: 'EI', direction: -1 },
  { id: 3, vi: 'Bạn thường là người bắt chuyện trước trong các cuộc gặp.', en: 'You usually initiate conversations at social gatherings.', dimension: 'EI', direction: 1 },
  { id: 4, vi: 'Sau một ngày dài giao tiếp, bạn cần thời gian ở một mình để nạp lại năng lượng.', en: 'After a long day of socializing, you need alone time to recharge.', dimension: 'EI', direction: -1 },
  { id: 5, vi: 'Bạn thích làm việc nhóm hơn làm việc một mình.', en: 'You prefer working in teams over working alone.', dimension: 'EI', direction: 1 },
  { id: 6, vi: 'Bạn cảm thấy thoải mái khi là trung tâm của sự chú ý.', en: 'You feel comfortable being the center of attention.', dimension: 'EI', direction: 1 },
  { id: 7, vi: 'Bạn thường cần thời gian yên tĩnh để suy nghĩ trước khi đưa ra ý kiến.', en: 'You usually need quiet time to think before sharing your opinion.', dimension: 'EI', direction: -1 },
  { id: 8, vi: 'Bạn thích tham gia các buổi tiệc đông người.', en: 'You enjoy attending large parties and social events.', dimension: 'EI', direction: 1 },
  { id: 9, vi: 'Bạn thấy mệt mỏi khi phải giao tiếp quá nhiều trong ngày.', en: 'You feel drained when you have to socialize too much in a day.', dimension: 'EI', direction: -1 },
  { id: 10, vi: 'Bạn có xu hướng chia sẻ suy nghĩ ngay lập tức với người khác.', en: 'You tend to share your thoughts immediately with others.', dimension: 'EI', direction: 1 },

  // S vs N (10 questions)
  { id: 11, vi: 'Bạn chú ý đến các chi tiết cụ thể hơn là bức tranh tổng thể.', en: 'You pay more attention to specific details than the big picture.', dimension: 'SN', direction: 1 },
  { id: 12, vi: 'Bạn thích tưởng tượng về những khả năng trong tương lai.', en: 'You enjoy imagining future possibilities.', dimension: 'SN', direction: -1 },
  { id: 13, vi: 'Bạn tin tưởng vào kinh nghiệm thực tế hơn trực giác.', en: 'You trust practical experience more than intuition.', dimension: 'SN', direction: 1 },
  { id: 14, vi: 'Bạn thường suy nghĩ theo cách trừu tượng và lý thuyết.', en: 'You often think in abstract and theoretical ways.', dimension: 'SN', direction: -1 },
  { id: 15, vi: 'Bạn thích các hướng dẫn rõ ràng từng bước một.', en: 'You prefer clear step-by-step instructions.', dimension: 'SN', direction: 1 },
  { id: 16, vi: 'Bạn hay mơ mộng về những điều chưa xảy ra.', en: 'You often daydream about things that haven\'t happened yet.', dimension: 'SN', direction: -1 },
  { id: 17, vi: 'Bạn thích làm việc với dữ liệu và con số cụ thể.', en: 'You prefer working with concrete data and numbers.', dimension: 'SN', direction: 1 },
  { id: 18, vi: 'Bạn thường tìm kiếm ý nghĩa ẩn sau các sự kiện.', en: 'You often look for hidden meanings behind events.', dimension: 'SN', direction: -1 },
  { id: 19, vi: 'Bạn tập trung vào hiện tại hơn là nghĩ về tương lai.', en: 'You focus on the present rather than thinking about the future.', dimension: 'SN', direction: 1 },
  { id: 20, vi: 'Bạn thích khám phá các ý tưởng mới lạ và sáng tạo.', en: 'You enjoy exploring novel and creative ideas.', dimension: 'SN', direction: -1 },

  // T vs F (10 questions)
  { id: 21, vi: 'Bạn đưa ra quyết định dựa trên logic hơn là cảm xúc.', en: 'You make decisions based on logic rather than emotions.', dimension: 'TF', direction: 1 },
  { id: 22, vi: 'Bạn thường đặt cảm xúc của người khác lên trước khi quyết định.', en: 'You often prioritize others\' feelings when making decisions.', dimension: 'TF', direction: -1 },
  { id: 23, vi: 'Bạn coi trọng sự công bằng hơn lòng nhân ái.', en: 'You value fairness over compassion.', dimension: 'TF', direction: 1 },
  { id: 24, vi: 'Bạn dễ dàng đồng cảm với cảm xúc của người khác.', en: 'You easily empathize with others\' emotions.', dimension: 'TF', direction: -1 },
  { id: 25, vi: 'Khi có mâu thuẫn, bạn ưu tiên tìm giải pháp hợp lý nhất.', en: 'In conflicts, you prioritize finding the most logical solution.', dimension: 'TF', direction: 1 },
  { id: 26, vi: 'Bạn thường bị ảnh hưởng bởi câu chuyện cảm động của người khác.', en: 'You are often moved by other people\'s emotional stories.', dimension: 'TF', direction: -1 },
  { id: 27, vi: 'Bạn thích phân tích vấn đề một cách khách quan.', en: 'You prefer analyzing problems objectively.', dimension: 'TF', direction: 1 },
  { id: 28, vi: 'Bạn cảm thấy khó chịu khi phải phê bình người khác.', en: 'You feel uncomfortable when you have to criticize others.', dimension: 'TF', direction: -1 },
  { id: 29, vi: 'Bạn đánh giá cao sự thật hơn là sự tế nhị.', en: 'You value truth over tactfulness.', dimension: 'TF', direction: 1 },
  { id: 30, vi: 'Bạn luôn cố gắng giữ hòa khí trong các mối quan hệ.', en: 'You always try to maintain harmony in relationships.', dimension: 'TF', direction: -1 },

  // J vs P (10 questions)
  { id: 31, vi: 'Bạn thích lập kế hoạch trước hơn là hành động tự phát.', en: 'You prefer planning ahead rather than acting spontaneously.', dimension: 'JP', direction: 1 },
  { id: 32, vi: 'Bạn thích giữ các lựa chọn mở thay vì quyết định sớm.', en: 'You prefer keeping your options open rather than deciding early.', dimension: 'JP', direction: -1 },
  { id: 33, vi: 'Bạn cảm thấy thoải mái khi mọi thứ được tổ chức ngăn nắp.', en: 'You feel comfortable when things are organized and orderly.', dimension: 'JP', direction: 1 },
  { id: 34, vi: 'Bạn thường làm việc hiệu quả nhất khi gần deadline.', en: 'You often work most efficiently close to deadlines.', dimension: 'JP', direction: -1 },
  { id: 35, vi: 'Bạn thường hoàn thành công việc trước thời hạn.', en: 'You usually complete tasks ahead of schedule.', dimension: 'JP', direction: 1 },
  { id: 36, vi: 'Bạn thích sự linh hoạt hơn là tuân theo lịch trình cố định.', en: 'You prefer flexibility over following a fixed schedule.', dimension: 'JP', direction: -1 },
  { id: 37, vi: 'Bạn thường lập danh sách việc cần làm và tuân thủ nó.', en: 'You usually make to-do lists and stick to them.', dimension: 'JP', direction: 1 },
  { id: 38, vi: 'Bạn thích khám phá và thay đổi kế hoạch giữa chừng.', en: 'You enjoy exploring and changing plans midway.', dimension: 'JP', direction: -1 },
  { id: 39, vi: 'Bạn cảm thấy căng thẳng khi mọi thứ không theo kế hoạch.', en: 'You feel stressed when things don\'t go according to plan.', dimension: 'JP', direction: 1 },
  { id: 40, vi: 'Bạn thích để mọi thứ diễn ra tự nhiên thay vì kiểm soát.', en: 'You prefer letting things happen naturally rather than controlling them.', dimension: 'JP', direction: -1 },
];

export interface MBTIResult {
  type: string;
  vi: { title: string; description: string };
  en: { title: string; description: string };
}

export const mbtiResults: Record<string, MBTIResult> = {
  INTJ: { type: 'INTJ', vi: { title: 'Kiến Trúc Sư', description: 'Người có tầm nhìn chiến lược, độc lập và quyết đoán. Bạn luôn hướng đến sự hoàn hảo và có khả năng phân tích xuất sắc.' }, en: { title: 'The Architect', description: 'Strategic visionaries who are independent and determined. You always strive for perfection with excellent analytical abilities.' } },
  INTP: { type: 'INTP', vi: { title: 'Nhà Logic Học', description: 'Người tư duy sáng tạo, yêu thích khám phá và giải quyết vấn đề phức tạp bằng logic.' }, en: { title: 'The Logician', description: 'Creative thinkers who love exploring and solving complex problems through logic.' } },
  ENTJ: { type: 'ENTJ', vi: { title: 'Nhà Chỉ Huy', description: 'Người lãnh đạo bẩm sinh, quyết đoán và có khả năng tổ chức xuất sắc.' }, en: { title: 'The Commander', description: 'Natural leaders who are decisive with excellent organizational abilities.' } },
  ENTP: { type: 'ENTP', vi: { title: 'Nhà Tranh Luận', description: 'Người thông minh, sáng tạo và yêu thích thách thức trí tuệ.' }, en: { title: 'The Debater', description: 'Smart, creative individuals who love intellectual challenges.' } },
  INFJ: { type: 'INFJ', vi: { title: 'Người Ủng Hộ', description: 'Người lý tưởng, sâu sắc và luôn muốn giúp đỡ người khác.' }, en: { title: 'The Advocate', description: 'Idealistic, insightful people who always want to help others.' } },
  INFP: { type: 'INFP', vi: { title: 'Người Hòa Giải', description: 'Người nhạy cảm, sáng tạo và luôn trung thành với giá trị của mình.' }, en: { title: 'The Mediator', description: 'Sensitive, creative individuals who stay true to their values.' } },
  ENFJ: { type: 'ENFJ', vi: { title: 'Người Cho Đi', description: 'Người nhiệt huyết, đồng cảm và có khả năng truyền cảm hứng cho người khác.' }, en: { title: 'The Protagonist', description: 'Passionate, empathetic people who inspire others.' } },
  ENFP: { type: 'ENFP', vi: { title: 'Người Truyền Cảm Hứng', description: 'Người nhiệt tình, sáng tạo và luôn tìm kiếm những ý nghĩa sâu sắc.' }, en: { title: 'The Campaigner', description: 'Enthusiastic, creative individuals who seek deeper meaning.' } },
  ISTJ: { type: 'ISTJ', vi: { title: 'Người Trách Nhiệm', description: 'Người đáng tin cậy, có trách nhiệm và luôn tuân thủ quy tắc.' }, en: { title: 'The Logistician', description: 'Reliable, responsible people who follow rules and traditions.' } },
  ISFJ: { type: 'ISFJ', vi: { title: 'Người Bảo Vệ', description: 'Người tận tâm, chu đáo và luôn sẵn sàng giúp đỡ người khác.' }, en: { title: 'The Defender', description: 'Dedicated, thoughtful individuals always ready to help others.' } },
  ESTJ: { type: 'ESTJ', vi: { title: 'Nhà Điều Hành', description: 'Người thực tế, có tổ chức và luôn hoàn thành công việc hiệu quả.' }, en: { title: 'The Executive', description: 'Practical, organized people who get things done efficiently.' } },
  ESFJ: { type: 'ESFJ', vi: { title: 'Nhà Ngoại Giao', description: 'Người thân thiện, quan tâm và luôn tạo sự hòa hợp trong nhóm.' }, en: { title: 'The Consul', description: 'Friendly, caring individuals who create harmony in groups.' } },
  ISTP: { type: 'ISTP', vi: { title: 'Nhà Kỹ Thuật', description: 'Người thực tế, linh hoạt và giỏi giải quyết vấn đề bằng tay.' }, en: { title: 'The Virtuoso', description: 'Practical, flexible people skilled at hands-on problem solving.' } },
  ISFP: { type: 'ISFP', vi: { title: 'Nhà Phiêu Lưu', description: 'Người nhạy cảm, nghệ thuật và yêu thích khám phá thế giới.' }, en: { title: 'The Adventurer', description: 'Sensitive, artistic individuals who love exploring the world.' } },
  ESTP: { type: 'ESTP', vi: { title: 'Nhà Kinh Doanh', description: 'Người năng động, thích hành động và luôn tìm kiếm trải nghiệm mới.' }, en: { title: 'The Entrepreneur', description: 'Energetic, action-oriented people seeking new experiences.' } },
  ESFP: { type: 'ESFP', vi: { title: 'Người Trình Diễn', description: 'Người vui vẻ, hòa đồng và luôn mang lại niềm vui cho người xung quanh.' }, en: { title: 'The Entertainer', description: 'Fun, sociable individuals who bring joy to those around them.' } },
};

export interface MBTIScores {
  EI: number;
  SN: number;
  TF: number;
  JP: number;
}

export function calculateMBTI(answers: Record<number, number>): { type: string; scores: MBTIScores } {
  const scores: MBTIScores = { EI: 0, SN: 0, TF: 0, JP: 0 };

  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer !== undefined) {
      const value = (answer - 3) * q.direction;
      scores[q.dimension] += value;
    }
  });

  const E_or_I = scores.EI >= 0 ? 'E' : 'I';
  const S_or_N = scores.SN >= 0 ? 'S' : 'N';
  const T_or_F = scores.TF >= 0 ? 'T' : 'F';
  const J_or_P = scores.JP >= 0 ? 'J' : 'P';

  return {
    type: `${E_or_I}${S_or_N}${T_or_F}${J_or_P}`,
    scores,
  };
}
