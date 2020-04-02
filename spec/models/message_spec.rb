require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save(メッセージが保存できる場合)' do
      it 'is valid with content(メッセージがあれば保存できる)' do
        expect(build(:message, image: nil)).to be_valid
      end

      it 'is valid with image(画像があれば保存ができる)' do
        expect(build(:message, content: nil)).to be_valid
      end

      it 'is valid with content and image(メッセージと画像があれば保存ができる)' do
        expect(build(:message)).to be_valid
      end
    end

    context 'can not save(メッセージを保存できない場合)' do
      it 'is invalid without content and image(メッセージと画像が無いと保存できない)' do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it 'is invalid without group_id(グループのidが無いと保存できない)' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it 'is invaid without user_id(ユーザIDがナイト保存できない)' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end