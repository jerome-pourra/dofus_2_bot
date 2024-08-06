import { AgressableStatusMessage } from "./../../../types/game/pvp/AgressableStatusMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateMapPlayersAgressableStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1751;

	public playerAvAMessages: Array<AgressableStatusMessage>;

    public constructor()
    {
        super();
        this.playerAvAMessages = Array<AgressableStatusMessage>();
    }

    public getMessageId()
    {
        return UpdateMapPlayersAgressableStatusMessage.protocolId;
    }

    public initUpdateMapPlayersAgressableStatusMessage(playerAvAMessages: Array<AgressableStatusMessage> = null): UpdateMapPlayersAgressableStatusMessage
    {
        this.playerAvAMessages = playerAvAMessages;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_UpdateMapPlayersAgressableStatusMessage(output);
    }

    public serializeAs_UpdateMapPlayersAgressableStatusMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.playerAvAMessages.length);
        for(var _i1: number = 0; _i1 < this.playerAvAMessages.length; _i1++)
        {
            (this.playerAvAMessages[_i1] as AgressableStatusMessage).serializeAs_AgressableStatusMessage(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateMapPlayersAgressableStatusMessage(input);
    }

    private deserializeAs_UpdateMapPlayersAgressableStatusMessage(input: ICustomDataInput)
    {
        let _item1: AgressableStatusMessage;
        let _playerAvAMessagesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _playerAvAMessagesLen; _i1++)
        {
            _item1 = new AgressableStatusMessage();
            _item1.deserialize(input);
            this.playerAvAMessages.push(_item1);
        }
    }

}