import { AgressableStatusMessage } from "./../../../types/game/pvp/AgressableStatusMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateMapPlayersAgressableStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1751;

	public playerAvAMessages: Array<AgressableStatusMessage>;

    public constructor()
    {
        super();
        this.playerAvAMessages = Array<AgressableStatusMessage>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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